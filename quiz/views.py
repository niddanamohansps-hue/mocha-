import json
from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import ensure_csrf_cookie
from .models import Question, QuizAttempt

def seed_default_questions():
    """Seeds default premium programming questions if none exist in the database."""
    default_questions = [
        {
            "text": "What is Python?",
            "option1": "A snake found only in South America",
            "option2": "A popular, high-level programming language known for readability",
            "option3": "A type of movie production software",
            "option4": "A strategy board game released in 1998",
            "correct_answer": "Option2"
        },
        {
            "text": "Which Django component handles the mapping between URL paths and Python functions?",
            "option1": "Views (views.py)",
            "option2": "Models (models.py)",
            "option3": "URLconf (urls.py)",
            "option4": "Templates",
            "correct_answer": "Option3"
        },
        {
            "text": "What does the 'M' in Django's MVT architecture stand for?",
            "option1": "Middleware",
            "option2": "Model",
            "option3": "Migration",
            "option4": "Mapping",
            "correct_answer": "Option2"
        },
        {
            "text": "Which lightweight SQL database engine is Django configured to use by default?",
            "option1": "PostgreSQL",
            "option2": "SQLite",
            "option3": "MySQL",
            "option4": "Oracle",
            "correct_answer": "Option2"
        },
        {
            "text": "What is the primary purpose of Django's 'migrations' system?",
            "option1": "To automatically optimize database queries",
            "option2": "To back up database records to external servers",
            "option3": "To propagate changes you make to your models into your database schema",
            "option4": "To convert static CSS/JS files into compressed production assets",
            "correct_answer": "Option3"
        },
        {
            "text": "Which of the following is NOT a built-in Django template filter?",
            "option1": "lower",
            "option2": "upper",
            "option3": "length",
            "option4": "uppercase",
            "correct_answer": "Option4"
        }
    ]

    for q in default_questions:
        Question.objects.create(
            text=q["text"],
            option1=q["option1"],
            option2=q["option2"],
            option3=q["option3"],
            option4=q["option4"],
            correct_answer=q["correct_answer"]
        )

@ensure_csrf_cookie
def quiz_home(request):
    """Renders the main single-page quiz application template."""
    return render(request, 'quiz/index.html')

def api_get_questions(request):
    """Securely returns a list of all questions (omitting correct answers)."""
    # Seed database if empty so it works out-of-the-box
    if Question.objects.count() == 0:
        seed_default_questions()
        
    questions = Question.objects.all().order_by('id')
    data = [q.to_dict() for q in questions]
    return JsonResponse({'questions': data})

@require_http_methods(["POST"])
def api_validate_answer(request):
    """Validates a user's answer submission on the server side."""
    try:
        data = json.loads(request.body)
        question_id = data.get('question_id')
        selected_option = data.get('selected_option')  # Expecting 'Option1', 'Option2', etc.

        if not question_id or not selected_option:
            return JsonResponse({'error': 'Missing question_id or selected_option'}, status=400)

        question = Question.objects.get(id=question_id)
        is_correct = (question.correct_answer == selected_option)
        
        return JsonResponse({
            'is_correct': is_correct,
            'correct_answer': question.correct_answer,
            'correct_text': getattr(question, question.correct_answer.lower())
        })
    except Question.DoesNotExist:
        return JsonResponse({'error': 'Question not found'}, status=404)
    except json.JSONDecodeError:
        return JsonResponse({'error': 'Invalid JSON request'}, status=400)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)

@require_http_methods(["POST"])
def api_submit_attempt(request):
    """Saves a student's final quiz attempt results to the database."""
    try:
        data = json.loads(request.body)
        student_name = data.get('student_name', '').strip()
        student_id = data.get('student_id', '').strip()
        score = data.get('score')
        total_questions = data.get('total_questions')

        if not student_name or not student_id or score is None or not total_questions:
            return JsonResponse({'error': 'Missing student details or score details'}, status=400)

        # Convert and validate types
        score = int(score)
        total_questions = int(total_questions)
        percentage = round((score / total_questions) * 100, 2)

        attempt = QuizAttempt.objects.create(
            student_name=student_name,
            student_id=student_id,
            score=score,
            total_questions=total_questions,
            percentage=percentage
        )

        return JsonResponse({
            'success': True,
            'attempt_id': attempt.id,
            'percentage': percentage
        })
    except ValueError:
        return JsonResponse({'error': 'Invalid numbers provided for score or total_questions'}, status=400)
    except json.JSONDecodeError:
        return JsonResponse({'error': 'Invalid JSON request'}, status=400)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)

def api_get_leaderboard(request):
    """Retrieves top 10 scoring classroom attempts."""
    attempts = QuizAttempt.objects.all().order_by('-percentage', '-score', '-timestamp')[:10]
    data = [{
        'id': a.id,
        'student_name': a.student_name,
        'student_id': a.student_id,
        'score': a.score,
        'total_questions': a.total_questions,
        'percentage': a.percentage,
        'timestamp': a.timestamp.strftime('%Y-%m-%d %H:%M')
    } for a in attempts]
    return JsonResponse({'leaderboard': data})

def api_get_attempts(request):
    """Retrieves recent classroom activity."""
    attempts = QuizAttempt.objects.all().order_by('-timestamp')[:50]
    data = [{
        'id': a.id,
        'student_name': a.student_name,
        'student_id': a.student_id,
        'score': a.score,
        'total_questions': a.total_questions,
        'percentage': a.percentage,
        'timestamp': a.timestamp.strftime('%Y-%m-%d %H:%M')
    } for a in attempts]
    return JsonResponse({'attempts': data})


