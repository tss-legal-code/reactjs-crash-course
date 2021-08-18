import Header from "./components/Header";
function App() {
    // const name = "bard";
    // var x = true;
    // const changeX =()=> {
    //     x = x ? false: true;
    //     return x;
    // };
    // function handleClick() {
    //     console.log('По кнопке кликнули');
    // }
    return (
        <div className="container">
            <Header  />
            {/* <h1> HEllo {name}! from react</h1> */}
            {/* <button onClick={handleClick}>Нажми на меня</button>;
            <button onClick={changeX}> {x ? "god bless yoy": "walk in peace"}</button> */}
        </div>
    );
}

export default App;
