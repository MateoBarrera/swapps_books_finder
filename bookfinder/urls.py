"""
URL configuration for bookfinder project.
"""
from django.contrib import admin
from django.urls import path
from books_search import views as books_search_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',  books_search_views.index, name='index'),
]
