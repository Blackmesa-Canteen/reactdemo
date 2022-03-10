import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css"
import Card from "../UI/Card";

function ExpenseItem(props) {

    return (
        <Card className="expense-item">

            <ExpenseDate date={props.date}/>
            <h2 className="expense-item__description">  {props.title}</h2>
            <div className="expense-item__price"><h3>{props.amount}</h3></div>
        </Card>
    );
}

export default ExpenseItem;

