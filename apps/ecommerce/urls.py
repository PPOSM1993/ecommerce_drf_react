from django.urls import path
from . import views

urlpatterns = [
    path('', views.GetRoutes, name="Routes"),
    path('products/', views.GetProducts, name="getProducts")
    
]