function Food(){

    const f1 = "Orange";
    const f2 = "Mango";
    const f3 = "Banana";


    return(
        <ul>
            <li>Apple</li>
            <li>{f1.toLowerCase()}</li>
            <li>{f3}</li>
            <li>{f2.toUpperCase()}</li>
        </ul>
    );
}

export default Food