from django.shortcuts import render
from django.http import JsonResponse
# Create your views here.
from rest_framework.response import Response
from rest_framework.decorators import api_view,permission_classes

from .models import *
from .serializer import *
#from .products import *
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import IsAuthenticated,IsAdminUser

from rest_framework.permissions import IsAuthenticated,IsAdminUser


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        serializer=UserSerializerWithToken(self.user).data
        for k,v in serializer.items():
            data[k]=v       
        return data


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class=MyTokenObtainPairSerializer



@api_view(['GET'])
@permission_classes([IsAuthenticated])
def  GetUserProfiles(request):
    user=request.user
    serializer=UserSerializer(user,many=False)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAdminUser])
def GetUsers(request):
    users=User.objects.all()
    serializer=UserSerializer(users,many=True)
    return Response(serializer.data)



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