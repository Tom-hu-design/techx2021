
// let numClick = 0;
// const ClickFunc = () => {
//     return React.createElement("div",{},
//     React.createElement("button",{class:"Delete",id:numClick},"Delete")),
//     ReactDOM.render(React.createElement(ClickFunc), document.getElementById("root")),
//     numClick++;
// }

const Students = () => {
    return React.createElement("div",{},[
        React.createElement("h1",{},"To Do List"),
        React.createElement("textarea",{},"Enter your to do list here..."),
        React.createElement("button",{id:hello,onClick={}},"Enter"),
    ])
}

ReactDOM.render(React.createElement(Students), document.getElementById("root"));

// const App = () =>{
//     return React.createElement("div",{},
//         React.createElement(Students,{
//             h1: "To Do List",
//             textarea:"Enter your to do list here...",
//             addButton:"Enter",
//         })
//     )
// }

