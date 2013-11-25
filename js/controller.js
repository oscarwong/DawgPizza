/*
        controller.js
        Controller for Online Order page
*/

$(function() {

    // Formats the customer's information and items in cart
    // into the agreed on data structure, the JSON format

        var cartModel = createCartModel();

        var cartView = createCartView({
                model: cartModel,
                template: $('.cart-item-template'),
                container: $('.cart-items-container'),
                subtotal: $('.subtotal'),
                tax: $('.tax'),
                total: $('.total')
        });

        //OPTIONAL STEP: Store the customer's entire order 
        //locally, and offer something the customer 
        //can click on to place the same order as last time.
        //get the cart JSON out of local storage, and if 
        //there was any, it will parse that and pass the results 
        //to the cart model's setItems() method
        $('.re-order').click(function(){
                var cartJSON = localStorage.getItem('cart');
                if (cartJSON && cartJSON.length > 0) {
                        cartModel.setItems(JSON.parse(cartJSON));
                }
        });        

        var pizzasModel = createItemsModel({
                menu: com.dawgpizza.menu.pizzas //pizzas array
        });

        var dessertsModel = createItemsModel({
                menu: com.dawgpizza.menu.desserts //desserts array
        }); 

        var drinksModel = createItemsModel({ //drinks array
                menu: com.dawgpizza.menu.drinks
        });

        var pizzasView = createPizzasView({
                model: pizzasModel,
                template: $('.pizza-template'),
                container: $('.pizzas-container')
        });

        var dessertsView = createDessertsView({
                model: dessertsModel,
                template: $('.dessert-template'),
                container: $('.desserts-container')
        });

        var drinksView = createDrinksView({
                model: drinksModel,
                template: $('.drink-template'),
                container: $('.drinks-container')
        });

        //refresh to get pizzas, desserts, drinks from server
        dessertsModel.refresh();
        pizzasModel.refresh();                 
        drinksModel.refresh();

        //when the items view triggers 'addToCart'
        //add a new item to the cart, using supplied information
        //such as type, foodName, size, and price 
        pizzasView.on('addToCart', function(data){
                var pizza = pizzasModel.getItemByName(data.pizzaName);
                if (!pizza) {
                        throw 'Invalid pizza"' + data.pizzaName + '"!';
                }

                var sizeLabel;
        if (data.pizzaSize == 0) {
                sizeProperty = 'small'; // size property for JSON format
            pizzaSize = '(Small 12")';
        } else if (data.pizzaSize == 1) {
                sizeProperty = 'medium'; // size property for JSON format
            pizzaSize = '(Medium 14")';
        } else {
                sizeProperty = 'large'; // size property for JSON format
            pizzaSize = '(Large 17")';
        }
                cartModel.addItem({
                        type: 'pizza',
                        foodName: data.pizzaName,
                        size: sizeProperty, // size property for JSON format
                        pizzaSize: pizzaSize,
                        price: pizza.prices[data.pizzaSize]
                });
        }); //addToCart event pizza

        dessertsView.on('addToCart', function(data){
                var dessert = dessertsModel.getItemByName(data.dessertName);
                if (!dessert) {
                        throw 'Invalid dessert"' + desert.name + '"!';
                }
                cartModel.addItem({
                        type: 'dessert',
                        foodName: dessert.name,
                        price: dessert.price
                });
        }); //addToCart event desserts

        drinksView.on('addToCart', function(data){
                var drink = drinksModel.getItemByName(data.drinkName);
                if (!drink) {
                        throw 'Invalid drink"' + drink.name + '"!';
                }
                cartModel.addItem({
                        type: 'drink',
                        foodName: drink.name,
                        price: drink.price
                });
        }); //addToCart event drinks

        //empties cart when empty cart button clicked
    $('.empty-cart').click(function(){
        cartModel.emptyCart();
    });

    //saves the current cart JSON to local storage 
    //whenever it changes, under the key 'cart'.
    cartModel.on('change', function(){
            localStorage.setItem('cart', cartModel.toJSON());
        });
}); //doc ready()