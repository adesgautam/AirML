from django.urls import path
from . import views
urlpatterns = [
    path('', views.rul_prediction),
    path('test', views.test),

]
