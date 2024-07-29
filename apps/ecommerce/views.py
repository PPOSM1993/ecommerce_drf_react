from django.shortcuts import render
from django.http import JsonResponse
# Create your views here.
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .products import *

@api_view(['GET'])
def GetRoutes(request):
    return Response("Hello Petter")



@api_view(['GET'])
def GetProducts(request):
    return Response(products)