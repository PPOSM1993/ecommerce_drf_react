from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView
)


urlpatterns = [
    path('', views.GetRoutes, name="Routes"),
    path('products/', views.GetProducts, name="getProducts"),
    path('product/<str:pk>/', views.GetProduct, name="getProduct"),
    path("users/login", views.TokenObtainPairView.as_view(), name="token_obatain_pair"),
    path('users/login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('users/profile/',views.GetUserProfiles, name="getUserProfiles"),
    path('users/', views.GetUsers, name="getUsers"),
    
]