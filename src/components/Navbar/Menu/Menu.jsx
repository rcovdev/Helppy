import { Link } from "react-router-dom";

const Menu = ({className}) => {
    return (
        <>
            <hr />
            <div className={className}>
                <Link className="link" to={"/"}>
                    ELECTRIC SERVICES
                </Link>
                <Link className="link" to={"/"}>
                    PLUMBING
                </Link>
                <Link className="link" to={"/"}>
                    CARPENTRY
                </Link>
                <Link className="link" to={"/"}> 
                    GARDENING
                </Link>
                <Link className="link" to={"/"}>
                    CLEANING
                </Link>
                <Link className="link" to={"/"}>
                    PAINTERS
                </Link>
                <Link className="link" to={"/"}>
                    MECHANICAL SERVICES
                </Link>
                <Link className="link" to={"/"}>
                    PETS
                </Link>
            </div>
        </>
    )
}

export default Menu