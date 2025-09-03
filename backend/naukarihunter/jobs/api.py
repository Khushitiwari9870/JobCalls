from rest_framework import serializers, status, permissions, pagination
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveAPIView
from .models import Blog
from django.utils.text import slugify

class BlogPagination(pagination.PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 100

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = [
            'id', 'title', 'slug', 'image', 'description',
            'seo_title', 'seo_keyword', 'seo_description',
            'created_at', 'updated_at'
        ]
        read_only_fields = ['slug', 'created_at', 'updated_at']

    def create(self, validated_data):
        if 'slug' not in validated_data or not validated_data['slug']:
            validated_data['slug'] = slugify(validated_data['title'])
        return super().create(validated_data)

class BlogListAPIView(ListAPIView):
    serializer_class = BlogSerializer
    permission_classes = [permissions.AllowAny]
    pagination_class = BlogPagination
    queryset = Blog.objects.all().order_by('-created_at')

class BlogDetailAPIView(RetrieveAPIView):
    serializer_class = BlogSerializer
    permission_classes = [permissions.AllowAny]
    lookup_field = 'slug'
    queryset = Blog.objects.all()

class BlogCreateAPIView(APIView):
    permission_classes = [permissions.IsAdminUser]
    
    def post(self, request, *args, **kwargs):
        serializer = BlogSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class BlogUpdateAPIView(APIView):
    permission_classes = [permissions.IsAdminUser]
    
    def patch(self, request, slug, *args, **kwargs):
        try:
            blog = Blog.objects.get(slug=slug)
            serializer = BlogSerializer(blog, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Blog.DoesNotExist:
            return Response(
                {"detail": "Blog post not found"},
                status=status.HTTP_404_NOT_FOUND
            )

class BlogDeleteAPIView(APIView):
    permission_classes = [permissions.IsAdminUser]
    
    def delete(self, request, slug, *args, **kwargs):
        try:
            blog = Blog.objects.get(slug=slug)
            blog.delete()
            return Response(
                {"detail": "Blog post deleted successfully"},
                status=status.HTTP_204_NO_CONTENT
            )
        except Blog.DoesNotExist:
            return Response(
                {"detail": "Blog post not found"},
                status=status.HTTP_404_NOT_FOUND
            )
