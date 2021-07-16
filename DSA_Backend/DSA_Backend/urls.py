from django.contrib import admin
from django.urls import path
from DAS_Rest_Api import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('earthquakeEstimation/', views.Earthquake_Estimation),
    path('floodEstimation/', views.Flood_Estimation),
    path('bloghome/<int:page>', views.blog),
    path('blogpost/<str:slug>', views.blogpost),
    path('news/<int:page>', views.news),
    path('floodLive/<int:page>', views.floodLive),
    path('earthquakeLive/<int:page>', views.earthquakeLive),
    path('weather/<str:location>', views.weather),
    path('contact/', views.contact),
    path('Flood_Events/', views.Flood_Events),
    path('Earthquake_Events/', views.Earthquake_Events),
    path('signup/', views.signup),
    path('myprofile/<str:username>', views.myprofile),
    path('login/', views.Login),
    path('logout/', views.Logout),
]+ static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)
