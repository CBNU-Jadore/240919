from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

from ..products_OLD import products

'''웹브라우저로 확인 시, Json 값만 나옴'''
# def getRoutes(request):
#   return JsonResponse('hello', safe=False)
# def getProducts(request):
#   return JsonResponse(products, safe=False)

'''rest_framework UI로 데이터 확인 '''
@api_view(['GET'])
def getRoutes(request):
  routes = [
    '/api/products'
  ]
  return Response(routes)

@api_view(['GET'])
def getProducts(request):
  # products = Product.objects.all()  # json으로 serialize 필요
  return Response(products)

@api_view(['GET'])
def getProduct(request, pk):
  product = None
  for i in products:
    if i['_id'] == pk:
      product = i
      break
  return Response(product)

