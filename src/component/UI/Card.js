import './Card.css'

/**
 * my onw wrapper. props.className fetches <Card className="" />'s className, and props.children allows
 * children doms to be insides of the label.
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function Card(props) {

    const classes = "card " + props.className;
    return (
        <div className={classes}>{props.children}</div>
    );
}
export default Card;