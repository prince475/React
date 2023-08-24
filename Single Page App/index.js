// coding the on load event since the script is at the header section

window.onload = () => {
    const rootElement = document.getElementById("root");
    // creating an spa

    // const button = document.createElement("button");
    // button.innerHTML = "Click me for current date";
    // button.addEventListener("click", () => {
    //     button.innerHTML = new Date().toString();
    // });
    // rootElement.appendChild(button);

    // creating a linked list

    // const ints = [1,2,3];
    // ints.forEach(i => {
    //     let li = document.createElement("li");
       
    //     li.innerHTML = i; 
    //     rootElement.appendChild(li);
    // })

    // creating a react application without jsx

    const root = ReactDOM.createRoot(rootElement);
     
    const ints = [1,2,3]


    const childrenElements = [];

    childrenElements.push(
        React.createElement("li",  {key: ints[0]}, ints[0])
        );
    
    childrenElements.push(
        React.createElement("li",  {key: ints[1]}, ints[1])
        );

    childrenElements.push(
        React.createElement("li",  {key: ints[2]}, ints[2])
        );

    root.render(childrenElements)

};