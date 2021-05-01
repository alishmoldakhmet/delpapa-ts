from rest_framework import generics, mixins
from rest_framework.permissions import IsAuthenticated
from django.http.response import JsonResponse 
from api.serializers import CategorySerializer, ProductSerializer2
from api.models import Category, Product

from django.http.request import HttpRequest
from django.http.response import HttpResponse, JsonResponse

from rest_framework.request import Request
from rest_framework.response import Response



class ProductListAPIView(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = ProductSerializer2
    permission_classes = (IsAuthenticated,)


class GetCategoryList(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = (IsAuthenticated,)

class ProductDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer2

def ProductListFBV(request, pk):
        try:
            category = Category.objects.get(id = pk)
        except Product.DoesNotExist as e:
            return JsonResponse({'message:': str(e)}, status=400)
        products = Product.objects.filter(category = category)
        serializer = ProductSerializer2(products, many=True)
        return JsonResponse(serializer.data, safe=False)

def ProductDetailFBV(request, category_id, uni_id):
    if request.user.is_staff:
        try:
            product = Product.objects.filter(id = uni_id)
            category = Category.objects.filter(id = category_id)
        except Product.DoesNotExist as e:
            return JsonResponse({'message:': str(e)}, status=400)
        serializer = ProductSerializer2(product, many=True)
        return JsonResponse(serializer.data, safe=False)
    return HttpResponse("You dont have permission")

    
