from django.contrib import admin
from django.urls import path,include
from api.views import *
from rest_framework_jwt.views import obtain_jwt_token
urlpatterns = [
    path('login/',obtain_jwt_token),
    path('categories/',GetCategoryList.as_view()),
    path('categories/<int:pk>',ProductListFBV),
    path('categories/<int:category_id>/<int:uni_id>',ProductDetailFBV)
]
