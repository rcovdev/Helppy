import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <>
            <hr />
            <div className="menu">
                <Link className="link" to={"/"}>
                    SERVICIOS ELÉCTRICOS
                </Link>
                <Link className="link" to={"/"}>
                    PLOMERÍA
                </Link>
                <Link className="link" to={"/"}>
                    CARPINTERÍA
                </Link>
                <Link className="link" to={"/"}>
                    JARDINERÍA
                </Link>
                <Link className="link" to={"/"}>
                    LIMPIEZA
                </Link>
                <Link className="link" to={"/"}>
                    PINTORES
                </Link>
                <Link className="link" to={"/"}>
                    MECÁNICOS
                </Link>
                <Link className="link" to={"/"}>
                    MASCOTAS
                </Link>
            </div>
        </>
    )
}

export default Menu