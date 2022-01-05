import { Link } from "react-router-dom"

const NotFound = () => {
    return ( 
        <div className="Not">
            <h2>Error 404</h2>
            <p>page not found</p>
            <Link to='/'>Back to homepage</Link>
        </div>
    );
}
 
export default NotFound;