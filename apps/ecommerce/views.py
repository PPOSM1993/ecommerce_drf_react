from django.shortcuts import render
from django.http import JsonResponse
# Create your views here.
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import *
from .serializer import ProductSerializer
#from .products import *

@api_view(['GET'])
def GetRoutes(request):
    return Response("Hello Petter")



@api_view(['GET'])
def GetProducts(request):
    products = Products.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def GetProduct(request, pk):
    product = Products.objects.get(_id=pk)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)