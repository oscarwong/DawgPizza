// function render(pizzas) {
// 	var prop;
// 	var $elem;
// 	var $clone;

// 	var $meatTemplate = $('.meatTemplate');
// 	var $vegTemplate = $('.vegTemplate');

// 	$.each(pizza, function() {
// 		$meatClone = $meatTemplate.clone();
// 		$vegClone = $vegTemplate.clone();

// 		if 
// 		for (prop in this) {
// 			if ($elem)
// 			$elem = $meatClone.find('.' + prop);
// 			if (!$elem)
// 				continue;

// 		}
// 	});

	// for (idx = 0; idx < com.dawgpizza.menu.pizzas.length; ++idx) {
	//     pizza = com.dawgpizza.menu.pizzas[idx];

	    //pizza.name = name of pizza
	    //pizza.description = description of pizza
	    //pizza.prices = array of three numbers, which are prices for small, medium, and large
	    //pizza.prices[0] = price for small
	    //pizza.prices[1] = price for medium
	    //pizza.prices[2] = price for large

	//} //for each pizza
//}


// function render(pizzas, meatTemplate, vegTemplate, pizzaMenu) {
// 	var instance;
// 	pizzaMenu.empty();
// 	$.each(pizzas, function(){
// 		if (this.vegetarian) {
// 			instance = vegTemplate.clone();
// 		} else {
// 			instance = meatTemplate.clone();
// 		}

// 		instance.find('.name').html(this.name);
// 		instance.find('.description').html(this.description);
// 		instance.find('.prices').html("$" + this.prices[0] + "/$" + this.prices[1] + "/$" + this.prices[2]);

// 		if (this.vegetarian) {
// 			instance.removeClass('vegTemplate');
// 		} else {
// 			instance.removeClass('meatTemplate');
// 		}

// 		pizzaMenu.append(instance);
// 	});
// }

function render(pizzas, meatTemplate, vegTemplate, container1, container2) {
	var instance;
	container1.empty();
	container2.empty();
	$.each(pizzas, function() {
		if (this.vegetarian) {
			instance = vegTemplate.clone();
		} else {
			instance = meatTemplate.clone();
		}

		instance.find('.name').html(this.name);
		instance.find('.description').html(this.description);
		instance.find('.prices').html("$" + this.prices[0] + "/$" + this.prices[1] + "/$" + this.prices[2]);

		if (this.vegetarian) {
			instance.removeClass('vegTemplate');
			container2.append(instance);
		} else {
			instance.removeClass('meatTemplate');
			container1.append(instance);
		}
	});
}

// function render(pizzas, meatTemplate, vegTemplate, pizzaMenu) {
// 	var idx;
// 	var pizza;
// 	var instance;
// 	// pizzaMenu.empty();
// 	for (idx = 0; idx < pizzas.length; ++idx) {
// 		pizza = pizzas[idx];
// 		if (pizza.vegetarian) {
// 			instance = vegTemplate.clone();
// 		} else {
// 			instance = meatTemplate.clone();
// 		}
// 		$('.name').append(pizza.name);
// 		$('.description').append(pizza.description);
// 		$('.prices').append("$" + pizza.prices[0] + "/$" + pizza.prices[1] + "/$" + pizza.prices[2]);

// 		if (this.vegetarian) {
// 			instance.removeClass('vegTemplate');
// 		} else {
// 			instance.removeClass('meatTemplate');
// 		}
// 	}
// }

$(function(){
	render(com.dawgpizza.menu.pizzas, $('.meatTemplate'), $('.vegTemplate'), $('.container1'), $('.container2'));
}); //document ready()
