from django.shortcuts import render

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from rest_framework.exceptions import NotFound
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

from base.models import Perfume, Review
from base.serializers import PerfumeSerializer

from rest_framework import status


@api_view(['GET'])
def getPerfumes(request):
    query = request.query_params.get('keyword')
    if query == None:
        query = ''

    perfumes = Perfume.objects.filter(
        name__icontains=query).order_by('-createdAt')

    page = request.query_params.get('page')
    paginator = Paginator(perfumes, 8)

    try:
        perfumes = paginator.page(page)
    except PageNotAnInteger:
        perfumes = paginator.page(1)
    except EmptyPage:
        perfumes = paginator.page(paginator.num_pages)

    if page == None:
        page = 1

    page = int(page)
    print('Page:', page)
    serializer = PerfumeSerializer(perfumes, many=True)
    return Response({'perfumes': serializer.data, 'page': page, 'pages': paginator.num_pages})


@api_view(['GET'])
def getTopPerfumes(request):
    perfumes = Perfume.objects.filter(rating__gte=4).order_by('-rating')[0:5]
    serializer = PerfumeSerializer(perfumes, many=True)
    return Response(serializer.data)

# 특정 상품을 조회하여 그 데이터를 클라이언트에 JSON 형식으로 반환
@api_view(['GET'])
def getPerfume(request, pk):
    try:
        perfume = Perfume.objects.get(_id=pk)   # Product(장고모델)의 _id 필드가 pk 값(URL에서 전달된 값)과 일치하는 객체를 조회
    except Perfume.DoesNotExist:
        raise NotFound(detail="Product not found", code=404)
    serializer = PerfumeSerializer(perfume, many=False) # Product 모델의 데이터를 직렬화(장고모델 -> JSON)
    return Response(serializer.data)    # HTTP 응답으로 반환 - 직렬화된 상품 데이터를 포함한 사전(dict) 형식의 데이터를 JSON 형식의 응답 생성


@api_view(['POST'])
@permission_classes([IsAdminUser])
def createPerfume(request):
    user = request.user

    perfume = Perfume.objects.create(
        user=user,
        name='Sample Name',
        price=0,
        brand='Sample Brand',
        countInStock=0,
        category='Sample Category',
        description=''
    )

    serializer = PerfumeSerializer(perfume, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAdminUser])
def updatePerfume(request, pk):
    data = request.data
    perfume = Perfume.objects.get(_id=pk)

    perfume.name = data['name']
    # perfume.price = data['price']
    perfume.brand = data['brand']
    # perfume.countInStock = data['countInStock']
    # perfume.category = data['category']
    # perfume.description = data['description']

    perfume.save()

    serializer = PerfumeSerializer(perfume, many=False)
    return Response(serializer.data)


@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deletePerfume(request, pk):
    perfume = Perfume.objects.get(_id=pk)
    perfume.delete()
    return Response('Product Deleted')


@api_view(['POST'])
def uploadImage(request):
    data = request.data

    perfume_id = data['perfume_id']
    perfume = Perfume.objects.get(_id=perfume_id)

    perfume.image = request.FILES.get('image')
    perfume.save()

    return Response('Image was uploaded')


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createPerfumeReview(request, pk):
    user = request.user
    product = Perfume.objects.get(_id=pk)
    data = request.data

    # 1 - Review already exists
    alreadyExists = product.review_set.filter(user=user).exists()
    if alreadyExists:
        content = {'detail': 'Product already reviewed'}
        return Response(content, status=status.HTTP_400_BAD_REQUEST)

    # 2 - No Rating or 0
    elif data['rating'] == 0:
        content = {'detail': 'Please select a rating'}
        return Response(content, status=status.HTTP_400_BAD_REQUEST)

    # 3 - Create review
    else:
        review = Review.objects.create(
            user=user,
            product=product,
            name=user.first_name,
            rating=data['rating'],
            comment=data['comment'],
        )

        reviews = product.review_set.all()
        product.numReviews = len(reviews)

        total = 0
        for i in reviews:
            total += i.rating

        product.rating = total / len(reviews)
        product.save()

        return Response('Review Added')
