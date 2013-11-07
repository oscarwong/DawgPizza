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

function dessertRender(dessert, dessertTemplate, container4) {
	var instance;
	container4.empty();
	$.each(dessert, function() {
		instance = dessertTemplate.clone();
		instance.find('.name').html(this.name);
		instance.find('.price').html("($" + this.price + ")");

		container4.append(instance);
	});
}

$(function(){
	render(com.dawgpizza.menu.pizzas, $('.meatTemplate'), $('.vegTemplate'), $('.container1'), $('.container2'));
	drinkRender(com.dawgpizza.menu.drinks, $('.drinkTemplate'), $('.container3'));
	dessertRender(com.dawgpizza.menu.drinks, $('.dessertTemplate'), $('.container4'))
}); //document ready()

