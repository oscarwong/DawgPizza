/*
    createPizzaView()

    Factory for a view that can render a given pizza model.
    Uses TemplateView as its prototype and overrides render()
    to create the add to cart buttons for the various formats.

    Note: this should probably be done with a nested view/model
    but this works for now.
*/

function createPizzaView(config) {
    var view = createTemplateView(config);

    view.afterRender = function(clonedTemplate){
        var price;
        var sizeLabel;
        var sizeTemplate = clonedTemplate.find('.size-template');
        var clonedSizeTemplate;

        clonedTemplate.find('.pizza-name').html(this.model.name);
        clonedTemplate.find('.pizza-description').html(this.model.description);

        //add buttons for the various formats, indicating their price       
        for (size in this.model.prices) {
            clonedSizeTemplate = sizeTemplate.clone();
            if (size == 0) {
                pizzaSize = 'Small';
            } else if (size == 1) {
                pizzaSize = 'Medium';
            } else {
                pizzaSize = 'Large';
            }
            clonedSizeTemplate.find('.pizza-size').html(pizzaSize);
            clonedSizeTemplate.find('.size-price').html(this.model.prices[size]);

            //add attributes for moveID and format so we know
            //what movie and format to add to the user's cart
            clonedSizeTemplate.find('button').attr({
                'data-pizza-name': this.model.name,
                'data-movie-size': size
            });
            clonedTemplate.append(clonedSizeTemplate);
        }

        //remove the format template
        //this is done instead of hiding it from view
        //either approach would work, but this allows me
        //to hide all the templates using one div at the
        //bottom of the page
        sizeTemplate.remove();
    };

    return view;
}