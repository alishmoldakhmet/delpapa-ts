from django.db import models

# Create your models here.

class Category(models.Model):
    id = models.AutoField(primary_key=True)
    name =  models.CharField(max_length=200)
    class Meta:
        verbose_name = "Category"
        verbose_name_plural = "Categories"


    def to_json(self):
        return {
            'name' : self.name
        }

    def __str__(self):
        return f'{self.name}'


class Product(models.Model):
    category =  models.ForeignKey(Category,related_name="products" ,on_delete=models.CASCADE, null=True)
    name =  models.CharField(max_length=200)
    id = models.AutoField(primary_key=True)
    description =  models.TextField()
    url = models.CharField(max_length=500)
    price =  models.FloatField(default=0)
    

    class Meta:
        verbose_name = "Product"
        verbose_name_plural = "Products"


    def to_json(self):
        return {
            'category' : self.category,
            'name' : self.name,
            'price' : self.price,
            'image' : self.url,
        }

    def __str__(self):
        return f'{self.name}'