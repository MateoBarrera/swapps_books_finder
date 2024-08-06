# Books Finder

<a name="readme-top"></a>

<!-- Section by othneildrew/Best-README-Template

*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->

[![Watchers][watchers-shield]][watchers-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/MateoBarrera/swapps_books_finder">
    <img src="static/img/MB_lila_dev.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Books Finder</h3>

  <p align="center">
    A user-friendly web application for finding books using the OpenLibrary API.
    <br />
    <a href="https://github.com/MateoBarrera/swapps_books_finder"><strong>Explore »</strong></a>
    <br />
    <br />
    <a href="https://github.com/MateoBarrera">Author</a>
    ·
    <a href="https://github.com/MateoBarrera/swapps_books_finder/issues">Report Bug</a>
    ·
    <a href="https://github.com/MateoBarrera/swapps_books_finder/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#introduction">Introduction</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This repository contains the Books Finder application, designed to help users find books using the OpenLibrary API. It offers a clean and modern interface for searching books by title, author, or subject. The goal is to provide a user-friendly experience and display the most useful information in the search results.

Using Django in this project lays the groundwork for more advanced tools in the future, such as user management systems and processing large volumes of related data.

<p align="right">(<a href="#readme-top">Back to Top</a>)</p>

<!-- INTRODUCTION -->

## Introduction

Books Finder is organized with the following features:

- **Search Functionality:** Users can search for books by title, author, or subject.
- **Autocomplete Suggestions:** Helps users with suggestions as they type.
- **Clean and Modern UI:** Designed to be user-friendly and visually appealing.
- **Responsive Design:** Works across various devices and screen sizes.

### Features

- **Search Functionality:** Users can search for books by title, author, or subject.
- **Autocomplete Suggestions:** As users type, suggestions are displayed to assist with their search.
- **Clean and Modern UI:** The application features a modern design that is easy to navigate.
- **Responsive Design:** The application is fully responsive and works on various devices.

### Live Demo

The application is deployed on Vercel and can be accessed at [Books Finder on Vercel](https://swapps-books-finder.vercel.app/).

<!-- USAGE -->

## Usage

1. **Search for Books**

   - Navigate to the homepage.
   - Enter a book title, author, or subject in the search bar.
   - Select the type of search from the dropdown menu.
   - Click "Search" to view results.

2. **View Search Results**
   - Results will be displayed in a list format.
   - Detailed view of a book is a planned feature for future updates.

## Roadmap

- [x] Initial project setup
- [x] Implement search functionality
- [x] Add autocomplete suggestions
- [ ] Implement detailed book view
- [ ] Add related search functionality
- [ ] User preference storage
- [ ] Performance enhancements (pagination)

Visit [open issues](https://github.com/MateoBarrera/swapps_books_finder/issues) for a complete list of proposed features and known issues.

<p align="right">(<a href="#readme-top">Back to Top</a>)</p>

## Installation and Setup

To run this project locally, follow these steps:

### Prerequisites

- Python 3.x
- Django
- Git

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/books-finder.git
   cd books-finder
   ```

2. **Create a Virtual Environment**

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. **Install Dependencies**

   ```bash
   pip install -r requirements.txt
   ```

4. **Run the Development Server**

   ```bash
   python manage.py runserver
   ```

   The application will be available at `http://127.0.0.1:8000/`.

<p align="right">(<a href="#readme-top">Back to Top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">Back to Top</a>)</p>

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch.
3. Make your changes and commit them with descriptive messages.
4. Push your changes to your fork.
5. Open a pull request and describe the changes you have made.

<!-- CONTACT -->

## Contact

Your Name - [@materile_19](https://twitter.com/materile_19) - mateo.barrerazapata@gmail.com

Project Link: [www.github.com/MateoBarrera/swapps_books_finder](https://github.com/MateoBarrera/swapps_books_finder)

<p align="right">(<a href="#readme-top">Back to Top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [OpenLibrary API](https://openlibrary.org/developers/api)
- [Vercel](https://vercel.com) for hosting
- [Guide for deploying Django on Vercel](https://dev.to/codewitgabi/hosting-your-django-project-on-vercel-a-quick-and-easy-deployment-3217)

<p align="right">(<a href="#readme-top">Back to Top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->

[watchers-shield]: https://img.shields.io/github/watchers/MateoBarrera/swapps_books_finder?style=for-the-badge
[watchers-url]: https://github.com/MateoBarrera/swapps_books_finder
[issues-shield]: https://img.shields.io/github/issues/MateoBarrera/swapps_books_finder?style=for-the-badge
[issues-url]: https://github.com/MateoBarrera/swapps_books_finder/issues
[license-shield]: https://img.shields.io/github/license/MateoBarrera/swapps_books_finder?style=for-the-badge
[license-url]: https://github.com/MateoBarrera/swapps_books_finder/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/mateobarrerazapata
