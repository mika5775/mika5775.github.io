function HelloReact() {
    return <h2 className="text-center mb-0">Hello React</h2>;
}

document.addEventListener('DOMContentLoaded', function() {
    const reactRootElement = document.getElementById('react-root');

    if (reactRootElement) {
        const root = ReactDOM.createRoot(reactRootElement);
        root.render(<HelloReact />);
    }
});
