from django.shortcuts import render

def home(request):
    """
    Renders the home page.

    Parameters:
        request (HttpRequest): The HTTP request object.

    Returns:
        HttpResponse: The rendered response containing the home page.
    """
    return render(request, 'books_search/index.html')