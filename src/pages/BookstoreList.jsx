// import Link // import useOutletContext
import { Link, useOutletContext } from "react-router-dom";

const BookstoreList = () => {
    {/* use useOutletContext and destructure bookstores value */}
    const { bookstores } = useOutletContext()


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