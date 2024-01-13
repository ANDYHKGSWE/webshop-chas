let allProducts = []

function truncateText(text, maxLength) {
	if (text.length > maxLength) {
		return text.substring(0, maxLength - 3) + '...'
	} else {
		return text
	}
}

export const fetchProductData = () => {
	console.log('Fetching...')
	fetch('https://fakestoreapi.com/products?limit=20')
		.then((res) => res.json())
		.then((data) => {
			allProducts = data
			renderProducts(allProducts)
		})
		.catch((error) => {
			console.log('Error while fetching product data: ', error)
		})
}

const renderProducts = (products) => {
	const productsMainDiv = document.querySelector('.products')
	productsMainDiv.innerHTML = ''

	products.forEach((product) => {
		console.log(product)
		const productDiv = document.createElement('div')
		productDiv.classList.add('product-item')
		productDiv.id = product.id

		productDiv.innerHTML = `
        <h2 class="product-title">${product.title}</h2>
        <img class="product-img" src="${product.image}" alt="${product.title}">
        <p class="product-desc">${truncateText(product.description, 100)}</p>
        <p class="product-price">Price: ${product.price.toFixed(2)}</p>
        <button class="add-to-cart">Add to cart</button>
        `

		productsMainDiv.appendChild(productDiv)
	})
}

export const filterProducts = (category) => {
	console.log('FILTERING by:', category)
	if (category === 'all') {
		renderProducts(allProducts)
	} else {
		const filteredProducts = allProducts.filter((product) => {
			return product.category === category
		})
		console.log(filteredProducts)
		renderProducts(filteredProducts)
	}
}
