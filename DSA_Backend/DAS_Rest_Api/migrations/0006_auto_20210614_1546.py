# Generated by Django 3.1.4 on 2021-06-14 10:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('DAS_Rest_Api', '0005_auto_20210614_1542'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blog',
            name='photo',
            field=models.ImageField(default='media/avatar.png', upload_to='media/Blogs'),
        ),
    ]
