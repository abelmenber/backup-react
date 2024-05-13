import React, {useState} from 'react';

function MyComponent(){

    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");


    function handNameChange(event){
        setName(event.target.value);
    }

    function handleQuantyChange(event){
        setQuantity(event.target.value);
    }

    function handcommentChange(event){
        setComment(event.target.value);
    }

    function handlePaymentChange(event){
        setPayment(event.target.value);
    }

    function handleshppingCherge(event){
        setShipping(event.target.value);
    }

    return (<div>
            <input value={name} onChange={handNameChange} />
            <p className="HNC-INPUT">Name: {name}</p>

            <input value={quantity} onChange={handleQuantyChange} type='number'/>
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handcommentChange} 
            placeholder="Enter delivery instruction"/>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Vise">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            <p>Payment: {payment}</p>

            <lable>
                <input type="radio" value="Pick Up"
                    checked={shipping === "Pick Up"}
                    onChange={handleshppingCherge}/>
                pick Up
            </lable><br />

            <lable>
            <input type="radio" value="Delivery"
                    checked={shipping === "Delivery"}
                    onChange={handleshppingCherge}/>
                Delivery
            </lable>
            <p>Shipping: {shipping}</p>

           
    </div>);
}

export default MyComponent