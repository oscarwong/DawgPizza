/*
    createDrinkView()

    Factory for a view that can render a given drink model.
    Uses TemplateView as its prototype and overrides render()
    to create the add to cart buttons for the various formats.

    Note: this should probably be done with a nested view/model
    but this works for now.
*/

function createDrinkView(config) {
    var view = createTemplateView(config);

    view.afterRender = function(clonedTemplate){
        var drinkTemplate = clonedTemplate.find('.drink-template');

        clonedTemplate.find('.drink-name').html(this.model.name);
        clonedTemplate.find('.drink-price').html(this.model.price);

        //add buttons for the various formats, indicating their price       
        clonedTemplate.find('.btn').attr({
            'data-drink-name': this.model.name,
            'data-drink-price': this.model.price
        });
        clonedTemplate.append(drinkTemplate);

        //remove the format template
        //this is done instead of hiding it from view
        //either approach would work, but this allows me
        //to hide all the templates using one div at the
        //bottom of the page
        drinkTemplate.remove();
    };

    return view;
}