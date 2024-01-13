import * as Utils from './app2.js'

Utils.fetchProductData()

const filterButtons = document.querySelectorAll('.filter-button')

filterButtons.forEach((button) => {
	button.addEventListener('click', () => {
		console.log('CLICK!')
		const category = button.id
		console.log(category)
		Utils.filterProducts(category)
	})
})
