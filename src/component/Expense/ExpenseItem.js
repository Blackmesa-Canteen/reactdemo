import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css"
import Card from "../UI/Card";
import {useState} from "react";

function ExpenseItem(props) {

    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle("Updated");
        console.log(title);
    };

    return (
        <Card className="expense-item">

            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2 className="expense-item__description">  {title}</h2>
                <div className="expense-item__price"><h3>{props.amount}</h3></div>
            </div>

            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;

