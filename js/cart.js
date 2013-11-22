$(function(){

	var cart = {
		name: null,
		address1: null,
		zip: null,
		phone: null,
		items: []
	} //cart data

	$('.add-to-cart').click(function(){
		var newCartItem = {
			type: this.getAttribute('data-type'),
			name: this.getAttribute('data-name'),
			size: this.getAttribute('data-size'),
			price: this.getAttribute('data-price')
		};

		cart.items.push(newCartItem);
		renderCart(cart, $('.cart-container'));
	});

	$('.place-order').click(function() {

		postCart(cart, $('.cart-form'));
	});
}); //doc ready

function renderCart(cart, container) {
	var idx, item;

	container.empty();

	for (idx = 0; idx < cart.items.length; ++idx) {
		item = cart.items(idx);

		//TODO: code to render the cart item
	}

	//TODO: code to render sub-total price of the cart
    //the tax amount (see instructions), 
    //and the grand total
} //renderCart()

function postCart(cart, cartForm) {
	
} //postCart()