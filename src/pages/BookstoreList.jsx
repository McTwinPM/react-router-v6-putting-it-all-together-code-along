// import Link
import { Link } from "react-router-dom";


const BookstoreList = () => {
    const bookstores = []

    // update a tag to Link component
    const displayBookstores = bookstores.map(store => (
        <li key={store.id}><Link to={store.id}>{store.name}</Link></li>
    ))

    return (
        <ul>
            {displayBookstores}
        </ul>
    );
}

export default BookstoreList;