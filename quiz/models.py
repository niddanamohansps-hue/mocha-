from django.db import models

class Question(models.Model):
    OPTION_CHOICES = [
        ('Option1', 'Option 1'),
        ('Option2', 'Option 2'),
        ('Option3', 'Option 3'),
        ('Option4', 'Option 4'),
    ]

    text = models.TextField()
    option1 = models.CharField(max_length=255)
    option2 = models.CharField(max_length=255)
    option3 = models.CharField(max_length=255)
    option4 = models.CharField(max_length=255)
    correct_answer = models.CharField(
        max_length=10,
        choices=OPTION_CHOICES,
        help_text="Select the correct option (Option1, Option2, Option3, or Option4)"
    )

    def __str__(self):
        return f"Question {self.id}: {self.text[:50]}..."

    def to_dict(self):
        """Returns a representation of the question without revealing the correct answer."""
        return {
            'id': self.id,
            'text': self.text,
            'options': {
                'Option1': self.option1,
                'Option2': self.option2,
                'Option3': self.option3,
                'Option4': self.option4,
            }
        }

class QuizAttempt(models.Model):
    student_name = models.CharField(max_length=100)
    student_id = models.CharField(max_length=50)
    score = models.IntegerField()
    total_questions = models.IntegerField()
    percentage = models.FloatField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.student_name} - {self.score}/{self.total_questions} ({self.percentage}%)"


