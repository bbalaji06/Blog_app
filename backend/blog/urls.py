from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [

    path('', views.home, name='home'),
    path('create/', views.createPost, name='create_post'),
    path('posts/', views.getPosts, name='get_posts'),
    path('posts/my-posts/', views.getUserPosts, name='get_user_posts'),
    path('posts/<int:post_id>/update/', views.updatePost, name='update_post'),
    path('posts/<int:post_id>/delete/', views.deletePost, name='delete_post'),
    path('signup/', views.signup, name='signup'),
    path('login/', views.login, name='login'),
    path('logout/', views.logout, name='logout'),
]
