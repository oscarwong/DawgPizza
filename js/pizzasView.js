/* 
    createPizzasView()

    factory for a view class that knows how to render the
    movies model. Uses TemplateListView as prototype.
    Overrides render() in order to add event handlers for
    the add to cart buttons.
*/

function createPizzasView(config) {
    config.templateView = createPizzaView(config);
    var view = createTemplateListView(config);
    
    view.afterRender = function() {
        //add event handlers for add-to-cart buttons
        this.container.find('.add-to-cart').click(function(){
            var button = $(this);
            var eventData = {
                pizzaName: button.attr('data-pizza-name'),
                pizzaSize: button.attr('data-pizza-size')
            };
            view.trigger('addToCart', eventData);
        });
    }; //afterRender()

    //auto-render if we have a model
    if (config.model)
        view.render();

    return view;

} //createPizzasView()