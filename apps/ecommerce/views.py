from django.shortcuts import render
from django.http import JsonResponse
# Create your views here.


def GetRoutes(request):
    return JsonResponse("Hello Petter",safe=False)


