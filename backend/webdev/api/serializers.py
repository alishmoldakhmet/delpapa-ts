from rest_framework import serializers
from api.models import Category, Product

class CategorySerializer2(serializers.ModelSerializer):
    # name = serializers.CharField()

    class Meta:
        model = Category
        fields = ('id', 'name',)


class ProductSerializer2(serializers.ModelSerializer):
    # category = CategorySerializer2(read_only=True)

    class Meta:
        model = Product
        fields = ('category','name','url', 'id', 'description', 'price',)


#  {
#     cat_id: 3,
#     name: 'Игровой ноутбук Asus TUF Gaming Dash F15 i7 11370H / 16ГБ / 512SSD / RTX3060 6ГБ / 15.6 / DOS / (FX516PM-HN023)',
#     url: 'https://www.technodom.kz/media/catalog/product/cache/1366e688ed42c99cd6439df4031862c6/5/8/58c6bcfbf56315752dec74e9f20c7ede29738879_234177_1.jpg',
#     uni_id : 6,
#     description: 'Этот ноутбук не уступает по производительности настольным ПК. Теперь вы сможете где угодно наслаждаться играми, в которые раньше можно было играть только дома.',
#     price: 639990
# }


class CategorySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(read_only=True)

    def create(self, validated_data):
        category = Category.objects.create(name=validated_data['name'])
        return category

    def update(self, instance, validated_data):
        instance.name = validated_data['name']
        instance.save()
        return instance
    

class ProductSerializer(serializers.Serializer):
    cat_id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    id = serializers.IntegerField(read_only=True)
    description = serializers.CharField()
    url = serializers.CharField()
    price = serializers.FloatField()
    

    def create(self, validated_data):
        product = Product.objects.create(name=validated_data['name'])
        return product

    def update(self, instance, validated_data):
        instance.name = validated_data['name']
        instance.save()
        return instance
        

