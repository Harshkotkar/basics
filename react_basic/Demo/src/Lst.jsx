function Lst({ count, setcount }) {
    const fruit = ["apple", "mango", "orange", "banana"];
    fruit.sort();
    const handeloutcome = () => {
        setcount(prev => prev + 1);
    };

    const lstitem = fruit.map((fruit, index) => (
        <li key={fruit + index}>{fruit}</li>
    ));

    return (
        <>
            <ul>{lstitem}</ul>
            <button onClick={handeloutcome}>Click me</button>
            <p>Clicked {count}</p>
        </>
    );
}

export default Lst;