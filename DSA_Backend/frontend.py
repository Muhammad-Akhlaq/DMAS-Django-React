import requests
import json
#to get all blogs
def all_blogs(page):
    URL = "http://127.0.0.1:8000/bloghome/"+str(page)+""
    headers = {'Content-Type': 'application/json'}
    r = requests.get(url = URL, headers = headers)
    data = r.json()
    #print(data)
    #to print only titles
    for i in range(len(data)):
        print(data[i]['title'])
#all_blogs(2)

#to get single blog
def single_blog(slug):
    URL = "http://127.0.0.1:8000/blogpost/"+str(slug)+""
    headers = {'Content-Type': 'application/json'}
    r = requests.get(url = URL, headers = headers)
    data = r.json()
    print(data)
#single_blog('ML')


def search_blog(slug):
    URL = "http://127.0.0.1:8000/bloghome/1"
    headers = {'Content-Type': 'application/json'}
    data = {"search":slug}
    json_data = json.dumps(data)
    r = requests.post(url = URL, headers = headers, data = json_data)
    data = r.json()
    print(data)
#search_blog("ML")

#to get news
def news(page):
    URL = "http://127.0.0.1:8000/news/"+str(page)+""
    headers = {'Content-Type': 'application/json'}
    r = requests.get(url = URL, headers = headers)
    data = r.json()
    #print(data)
    for i in range(len(data['News'])):
        print(data['News'][i]['headline'])
        print(data['News'][i]['date'])
#news(1)

#to get flood live news
def floodlive(page):
    URL = "http://127.0.0.1:8000/floodLive/"+str(page)+""
    headers = {'Content-Type': 'application/json'}
    r = requests.get(url = URL, headers = headers)
    data = r.json()
    #print(data)
    for i in range(len(data['News'])):
        print(data['News'][i]['headline'])
        print(data['News'][i]['date'])

#to get Earthquake live news
def earthquakelive(page):
    URL = "http://127.0.0.1:8000/earthquakeLive/"+str(page)+""
    headers = {'Content-Type': 'application/json'}
    r = requests.get(url = URL, headers = headers)
    data = r.json()
    print(data)
    """
    for i in range(len(data['News'])):
        print(data['News'][i]['headline'])
        print(data['News'][i]['date'])
    """
#earthquakelive(1)

#to get weather forecast
def weather():
    URL = "http://127.0.0.1:8000/weather/sialkot"
    headers = {'Content-Type': 'application/json'}
    r = requests.get(url = URL, headers = headers)
    data = r.json()
    print(data)


#to send contact data 
def contact():
    URL = "http://127.0.0.1:8000/contact/"
    data = {"name":"Akhlaq","email":"akhlaq@gmail.com","phone":"03333333333","desc":"hello world"}
    json_data = json.dumps(data)
    headers = {'Content-Type': 'application/json'}
    r = requests.post(url = URL, headers=headers, data = json_data)
    #response msg
    data = r.json()
    print(data)
#contact()


#Estimation
def estimate():
    URL = "http://127.0.0.1:8000/Earthquake_Deaths/"
    data = {"Continent":"Asia","Earthquake_Type":"Ground_Movement","Magnitude":5.6,"Latitude":23,"Longitude":43}
    json_data = json.dumps(data)
    headers = {'Content-Type': 'application/json'}
    r = requests.post(url = URL, headers=headers, data = json_data)
    #response msg
    data = r.json()
    print(data)
#estimate() 
def estimateflood():
    URL = "http://127.0.0.1:8000/floodEstimation/"
    data = {"Severity":1,"Affected Area":6000,"Magnitude":5.6,"Centroid X":23,"Centroid Y":43}
    json_data = json.dumps(data)
    headers = {'Content-Type': 'application/json'}
    r = requests.post(url = URL, headers=headers, data = json_data)
    #response msg
    data = r.json()
    print(data)
#estimateflood()
def signup():
    URL = "http://127.0.0.1:8000/signup/"
    data = {"fname":"Mubashar","lname":"Ateeq","username":"mubashar","email":"mubashar@gmail.com","pass1":"mubashar","pass2":"mubashar"}
    json_data = json.dumps(data)
    headers = {'Content-Type': 'application/json'}
    r = requests.post(url = URL, headers=headers, data = json_data)
    #response msg
    data = r.json()
    print(data)
#signup()
def login():
    URL = "http://127.0.0.1:8000/login/"
    data = {"username":"mubashar","pass":"mubashar"}
    json_data = json.dumps(data)
    headers = {'Content-Type': 'application/json'}
    r = requests.post(url = URL, headers=headers, data = json_data)
    #response msg
    data = r.json()
    print(data)
#login()
def profileget():
    URL = "http://127.0.0.1:8000/myprofile/mubashar"
    headers = {'Content-Type': 'application/json'}
    r = requests.get(url = URL, headers=headers)
    #response msg
    data = r.json()
    print(data)
profileget()
def profileupdate():
    URL = "http://127.0.0.1:8000/myprofile/mubashar"
    data = {"f_name":"Mubashar","l_name":"Ateeq","username":"mubashar","email":"mubashar@gmail.com","pass1":"mubashar","pass2":"mubashar","bio":"hello g"}
    json_data = json.dumps(data)
    headers = {'Content-Type': 'application/json'}
    r = requests.post(url = URL, headers=headers, data = json_data)
    #response msg
    data = r.json()
    print(data)
#profileupdate()