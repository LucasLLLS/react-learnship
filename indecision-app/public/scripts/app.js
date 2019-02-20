'use strict';

var app = {
    title: 'My App',
    subtitle: 'My app description',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    renderTemplate();
};

function listOptions(options) {
    return options.join(', ');
};

function removeOptions() {
    app.options = [];
    renderTemplate();
};

var rootElement = document.getElementById('app');

var renderTemplate = function renderTemplate() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'p',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options && app.options.length ? 'Here are your options => ' + listOptions(app.options) : 'No options!'
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            ),
            React.createElement(
                'button',
                { onClick: removeOptions },
                'Remove All'
            )
        )
    );
    ReactDOM.render(template, rootElement);
};

renderTemplate();
