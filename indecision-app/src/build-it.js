const toggle = () => {
    showInfo = !showInfo;
    renderTemplate();
};
let showInfo = false;
const rootEl = document.getElementById('app');

const renderTemplate = () => {
    const template = (
        <div>
            <h1>The incredible Toogle App!</h1>
            <button onClick={toggle}>{showInfo ? 'Hide' : 'Show'} info</button>
            {showInfo && (
                <p>This is the info text to be shown</p>
            )}
        </div>
    );
    
    ReactDOM.render(template, rootEl);
};

renderTemplate();
