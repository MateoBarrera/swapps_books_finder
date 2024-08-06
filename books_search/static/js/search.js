/**
 * Adds event listeners to the search input and form elements.
 */

// Adds an event listener to the search input.
document.getElementById("search-input").addEventListener("input", function () {
	// Extract & Formatting input user to API query.
	const query = this.value.replaceAll(" ", "+")
	const type = document.getElementById("search-type").value

	// Check query length to fetch suggestions.
	if (query.length > 2) {
		fetchSuggestions(query, type)
	} else {
		// Clear the suggestions.
		clearSuggestions()
	}
})

// Adds an event listener to form submitted.
document.getElementById("search-form").addEventListener("submit", function (event) {
	event.preventDefault()
	animation()

	// Gets the query from the user input.
	const query = document.getElementById("search-input").value.replaceAll(" ", "+")
	const type = document.getElementById("search-type").value

	// Performs the book search with the specified query and type.
	searchBooks(query, type)
	// Clears the suggestions after performing the search.
	clearSuggestions()
})

/**
 * Fetches book suggestions based on the query and search type.
 *
 * @param {string} query - The search query.
 * @param {string} type - The search type (e.g., title, author).
 * @returns {Promise<void>}
 */
async function fetchSuggestions(query, type) {
	console.log("fetching suggestions")
	// Constructs the URL for the search request to the Open Library API.
	const url = `https://openlibrary.org/search.json?${type}=${query}&fields=key,title,author_name&limit=5`
	console.log(url)
	// Performs the search request to the API.
	const response = await fetch(url)
	/* TODO: check response for a correct handler process */

	console.log(response.status)
	// Converts the response to JSON format.
	const data = await response.json()
	const numFound = data.numFound
	console.log(numFound)
	// Checks if there are any search results.
	if (numFound === 0) {
		clearSuggestions()
		return
	}
	// Gets the first 10 suggestions from the search results.
	const suggestions = data.docs.slice(0, 10)
	displaySuggestions(suggestions)
}

function displaySuggestions(suggestions) {
	const suggestionsContainer = document.getElementById("suggestions")
	suggestionsContainer.innerHTML = ""
	suggestions.forEach((suggestion) => {
		const div = document.createElement("div")
		div.className = "suggestion"
		div.textContent = suggestion.title
		div.addEventListener("click", () => {
			animation()
			document.getElementById("search-input").value = suggestion.title
			clearSuggestions()
			searchBooks(suggestion.title, "title")
		})
		suggestionsContainer.appendChild(div)
	})
}

/* Remove suggestions */
function clearSuggestions() {
	document.getElementById("suggestions").innerHTML = ""
}

/**
 * Performs a search for books based on the provided query and type.
 * @param {string} query - The search query.
 * @param {string} type - The type of search (e.g., "author", "title", "subject").
 * @returns {Promise<void>} - A promise that resolves when the search results are displayed.
 */
async function searchBooks(query, type) {
	const response = await fetch(`https://openlibrary.org/search.json?${type}=${query}`)
	const data = await response.json()
	const results = data.docs
	displayResults(results)
}

/**
 * Create an HTML element for a book.
 *
 * @param {Object} book - A book object.
 * @returns {HTMLElement} - The HTML element representing the book.
 */
function createBookElement(book) {
	const div = document.createElement("div")
	div.className = "book"
	const imgSrc = book.cover_i
		? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
		: "/static/img/NoCover.webp" // Image for no cover book
	const img = `<img src="${imgSrc}" alt="${book.title} cover">`
	const start = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
				`

	const urlOpenLibrary = `https://openlibrary.org${book.key}/${encodeURIComponent(
		book.title
	)}?edition=key%3A/books/${book.edition_key[0]}`
	div.innerHTML = `
        ${img}
        <div class="content">
            <h3>${book.title}</h3>
            <p class="author">by ${
							book.author_name ? book.author_name.join(", ") : "Unknown Author"
						}</p>
						<div class="rating">
						<span class="rating-value">${
							book.ratings_average ? book.ratings_average.toFixed(2) : "N/A"
						}</span>${start}
						</div>
            
            <p class="year">${book.first_publish_year || "Unknown Year"}</p>
            <p class="description">${book.description || "No description available."}</p>
            <a class="view-link" href="${urlOpenLibrary}">Go to Open Library</a>
        </div>
    `
	return div
}

/**
 * Display the search results on the webpage.
 *
 * @param {Array} books - An array of book objects.
 * @returns {void}
 */
function displayResults(books) {
	const resultsContainer = document.getElementById("results")
	resultsContainer.innerHTML = ""
	books.forEach((book) => {
		const bookElement = createBookElement(book)
		resultsContainer.appendChild(bookElement)
	})
}

function animation() {
	const searchForm = document.getElementById("search-form")
	searchForm.classList.add("submitted")
}
