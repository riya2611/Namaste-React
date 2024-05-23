const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "h1 tag"),
        React.createElement("h2", {}, "h2 tag")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {}, "h1 tag"),
        React.createElement("h2", {}, "h2 tag")
    ])
]);
console.log(parent);
// const heading = React.createElement(
//     "h1", 
//     {id:"heading", xyz:"abc"}, 
//     "Welcome to React");
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
