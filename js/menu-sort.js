function render(pizzas, meatTemplate, vegTemplate, container1, container2) {
	var instance;
	var small;
	var med;
	var large;
	container1.empty();
	container2.empty();
	$.each(pizzas, function() {
		if (this.vegetarian) {
			instance = vegTemplate.clone();
		} else {
			instance = meatTemplate.clone();
		}
		small = instance.find('.small');
		med = instance.find('.med');
		large = instance.find('.large');
		instance.find('.name').html(this.name);
		instance.find('.description').html(this.description);
		instance.find('.prices').html("$" + this.prices[0] + "/$" + this.prices[1] + "/$" + this.prices[2]);
		small.setAttribute('.data-name', this.name);
		med.setAttribute('.data-name', this.name);
		large.setAttribute('.data-name', this.name);
		small.setAttribute('data-price', this.prices[0]);
		med.setAttribute('data-price', this.prices[1]);
		large.setAttribute('data-price', this.prices[2]);


		if (this.vegetarian) {
			container2.append(instance);
		} else {
			container1.append(instance);
		}
	});
}

function drinkRender(drinks, drinkTemplate, container3) {
	var instance;
	container3.empty();
	$.each(drinks, function() {
		instance = drinkTemplate.clone();
		instance.find('.name').html(this.name);
		instance.find('.price').html("($" + this.price + ")");

		container3.append(instance);
	});
}

function dessertRender(desserts, dessertTemplate, container4) {
	var instance;
	container4.empty();
	$.each(desserts, function() {
		instance = dessertTemplate.clone();
		instance.find('.name').html(this.name);
		instance.find('.price').html("($" + this.price + ")");

		container4.append(instance);
	});
}

function buttonRender(pizzas, MbuttonTemplate, MbutContainer, VbuttonTemplate, VbutContainer) {
	var instance;
	MbutContainer.empty();
	VbutContainer.empty();
	var idx;

	$.each(pizzas, function() {
		if (this.vegetarian) {
			instance = VbuttonTemplate.clone();
		} else {
			instance = MbuttonTemplate.clone();
		}

		for (idx = 0; idx < 3; ++idx) {
			instance.getAttribute('data-name').html(this.name);
			instance.getAttribute('data-size').html(this.prices[idx]);
			instance.find('.')
		}		
	});
}

$(function(){
	render(com.dawgpizza.menu.pizzas, $('.meatTemplate'), $('.vegTemplate'), $('.container1'), $('.container2'));
	drinkRender(com.dawgpizza.menu.drinks, $('.drinkTemplate'), $('.container3'));
	dessertRender(com.dawgpizza.menu.desserts, $('.dessertTemplate'), $('.container4'));
	// buttonRender(com.dawgpizza.menu.pizzas, $('.Madd-to-cart'), $('.Vadd-to-cart'), $('.MbuttonContainer'), $('.VbuttonContainer'));
}); //document ready()

