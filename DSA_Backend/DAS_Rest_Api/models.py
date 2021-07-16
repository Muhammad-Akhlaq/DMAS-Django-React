from django.db import models
from ckeditor.fields import RichTextField
from django.contrib.auth.models import User
# Create your models here.

class Blog(models.Model):
    sno = models.AutoField(primary_key=True)
    title = models.CharField(max_length=200)
    content = RichTextField()
    short_desc = models.CharField(max_length=300, default="")
    slug = models.SlugField(max_length=25)
    time = models.DateTimeField(auto_now_add=True)
    photo = models.ImageField(upload_to='media/Blogs', default='media/avatar.png')
    author = models.CharField(max_length=20, default="")

    def __str__(self):
        return self.title

class Contact(models.Model):
    sno = models.AutoField(primary_key=True)
    name = models.CharField(max_length=40)
    email = models.CharField(max_length=40)
    subject = models.CharField(max_length=20)
    massage = models.TextField()
    time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.CharField(max_length=200,default="")
    files = models.FileField()
#upload_to='media', default='media/avatar.png'

    def __str__(self):
        return self.user.username
