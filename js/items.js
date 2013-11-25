/*
    createItemsModel()

    Creates a model for the list of pizzas for sale.
    This uses the ListModel as the prototype, but adds 
    a few specific methods.

    The config parameter should contain the following properties:
    - url (string) URL from which we should fetch movie JSON
*/

function createItemsModel(config) {
    var model = createListModel(config);

    model.getItemByName = function(name) {
        var items = model.getItems();
        var item;
        var idx;

        for (idx = 0; idx < items.length; ++idx) {
            item = items[idx];
            if (name == item.name) {
                return item;
            }
        }
    }

    model.refresh = function() {
        var items = this.menu;
        model.setItems(items);
    }

    return model;
} //createMoviesModel()