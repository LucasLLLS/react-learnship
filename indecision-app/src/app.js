const app = {
    title: 'My App',
    subtitle: 'My app description',
    options: [],
};


const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    renderTemplate();
};

function listOptions(options) {
    return options.join(', ');
};

function removeOptions () {
    app.options = [];
    renderTemplate();
};

const rootElement = document.getElementById('app');

const renderTemplate = () => {
    const template = (
        <div>
            <p>{app.title}</p>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{(app.options && app.options.length) ? `Here are yout fucking options => ${listOptions(app.options)}` : 'No options, sukcer!'}</p>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
                <button onClick={removeOptions}>Remove All</button>
            </form>
        </div>
    );
    ReactDOM.render(template, rootElement);
};

renderTemplate();

