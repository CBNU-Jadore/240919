# from django.urls import path
# from base.views import product_views as views

# urlpatterns = [

#     path('', views.getProducts, name="products"),

#     path('create/', views.createProduct, name="product-create"),
#     path('upload/', views.uploadImage, name="image-upload"),

#     path('<str:pk>/reviews/', views.createProductReview, name="create-review"),
#     path('top/', views.getTopProducts, name='top-products'),
#     path('<str:pk>/', views.getProduct, name="product"),

#     path('update/<str:pk>/', views.updateProduct, name="product-update"),
#     path('delete/<str:pk>/', views.deleteProduct, name="product-delete"),
# ]


from django.urls import path
from base.views import perfume_views as views

urlpatterns = [

    path('', views.getPerfumes, name="products"),

    path('create/', views.createPerfume, name="product-create"),
    path('upload/', views.uploadImage, name="image-upload"),

    path('<str:pk>/reviews/', views.createPerfumeReview, name="create-review"),
    path('top/', views.getTopPerfumes, name='top-products'),
    path('<str:pk>/', views.getPerfume, name="product"),

    path('update/<str:pk>/', views.updatePerfume, name="product-update"),
    path('delete/<str:pk>/', views.deletePerfume, name="product-delete"),
]
