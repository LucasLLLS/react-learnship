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

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const renderTemplate = () => {
    const template = (
        <div>
            <p>{app.title}</p>
            {app.subtitle && <p>{app.subtitle}</p>}
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
                <button onClick={removeOptions}>Remove All</button>
                <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            </form>
            <ol>
                {
                    app.options.map((opt, key) => <li key={key}>{opt}</li>)
                }            
            </ol>
        </div>
    );
    ReactDOM.render(template, rootElement);
};

renderTemplate();

