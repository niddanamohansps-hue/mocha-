from django.urls import path
from . import views

urlpatterns = [
    path('', views.quiz_home, name='quiz_home'),
    path('api/questions/', views.api_get_questions, name='api_get_questions'),
    path('api/validate/', views.api_validate_answer, name='api_validate_answer'),
    path('api/submit-attempt/', views.api_submit_attempt, name='api_submit_attempt'),
    path('api/leaderboard/', views.api_get_leaderboard, name='api_get_leaderboard'),
    path('api/attempts/', views.api_get_attempts, name='api_get_attempts'),
]
