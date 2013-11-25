/*
    createCartModel()

    Creates a model for the shopping cart. This uses the ListModel
    as the prototype, but adds a few specific methods.

    The config parameter can contain the following properties:
    - items (array of objects) initial items for the cart (optional)
*/

function createCartModel(config) {
        var model = createListModel(config);
        model.getSubtotal = function() {
            var idx;
            var subtotal = 0;
            for (idx = 0; idx < this.items.length; ++idx) {
                    subtotal += this.items[idx].price;
            }
            return subtotal.toFixed(2);
        }; //getSubtotal()

        model.getTax = function() {
            var tax = (0.095 * this.getSubtotal()).toFixed(2);
            return tax;
        }

        model.getTotal = function() {
            var totalPrice = (this.getSubtotal() + this.getTax()).toFixed(2);
            return totalPrice;
        }

        model.toJSON = function() {
            return JSON.stringify(this.items);
        }; //toJSON()

        return model;
} //createCartModel()