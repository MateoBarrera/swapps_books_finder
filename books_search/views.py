from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'books_search/index.html')

# Create your views here.
def index2(request):
    return render(request, 'books_search/index_2.html')   

def home(request):
    return render(request, 'books_search/home.html')