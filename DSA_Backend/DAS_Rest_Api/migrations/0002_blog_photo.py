# Generated by Django 3.0.8 on 2021-05-12 06:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('DAS_Rest_Api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='blog',
            name='photo',
            field=models.ImageField(default='media/avatar.png', upload_to='media/Blogs'),
        ),
    ]
