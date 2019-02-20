const app = {
    title: 'My App',
    subtitle: 'My app description',
    options: [
        'One',
        'Two',
    ],
};
let count = 0;
const addOne = () => {
    count++;
    renderCounter();
};
const subtractOne = () => {
    count--;
    renderCounter();
};
const reset = () => {
    count = 0;
    renderCounter();
};
const template = (
    <div>
        <p>{app.title}</p>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{(app.options && app.options.length) ? `Here are yout fucking options => ${listOptions(app.options)}` : 'No options, sukcer!'}</p>
    </div>
);


function listOptions(options) {
    return options.join(', ');
};

const user = {
    name: 'Lucas',
    age: 25,
    location: 'Campo Limpo',
};

const rootElement = document.getElementById('app');

const renderCounter = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne} id="my-id" className="button">+1</button>
            <button onClick={subtractOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
    ReactDOM.render(templateTwo, rootElement);
};

renderCounter();