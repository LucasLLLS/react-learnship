'use strict';

var toggle = function toggle() {
    showInfo = !showInfo;
    renderTemplate();
};
var showInfo = false;
var rootEl = document.getElementById('app');

var renderTemplate = function renderTemplate() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'The incredible Toogle App!'
        ),
        React.createElement(
            'button',
            { onClick: toggle },
            showInfo ? 'Hide' : 'Show',
            ' info'
        ),
        showInfo && React.createElement(
            'p',
            null,
            'This is the info text to be shown'
        )
    );

    ReactDOM.render(template, rootEl);
};

renderTemplate();
