
import classes from "./NoteItems.module.css";
const NoteItems = ({ children }) => {
    return (
        <li className={classes.list}>{children}</li>
    )
}

export default NoteItems;
