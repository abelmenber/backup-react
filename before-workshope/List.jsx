import PropTypes from 'prop-types';
function List(props){

    // const fruits = ["apple", "orange", "banana", "coconut", "pineapple"];

    // fruits.sort();

    // fruits.sort((a, b) => a.name.localeCompare(b.name)); //ALPHABETICAL
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); //REVERSE ALPHABETICAL
    // fruits.sort((a, b) => a.calories - b.calories); //ALPHABETICAL
    // fruits.sort((a, b) => b.calories - a.calories); //ALPHABETICAL

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100) 
    const category = props.category;
    const itemList = props.items;


    const listItems = itemList.map(item => <li key={item.id}>
                                        {item.name}: &nbsp;
                                        <b>{item.calories}</b></li>);

    // return(<ol>{listItems}</ol>);

    return(<>
        <h3 className="list-category">{category}</h3>
        <ol className="list-items">{listItems}</ol>
    </>)

}
List.propTypes = {
    category: propsTypes.string,
    items: PropsTypes.string,
    items:PropsTypes.arrayOf(PropsTypes.shape({ id: PropsTypes.number,
        name:PropsTypes.string,
        calories: PropsTypes.number})),
}
List.defaultProps = {
    category: "Category",
    items: [],
}


export default List