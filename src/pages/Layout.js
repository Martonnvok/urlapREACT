import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        {/* A publikus tartalom linkje */}
                        <Link to="/NoPage">BlahBlahBlaaah</Link>
                    </li>
                    <li>
                        {/* Az admin oldal linkjetartalom linkje */}
                        <Link to="/urlap">Űrlap</Link>
                    </li>
                    <li>
                        {/* Az admin oldal linkjetartalom linkje */}
                        <Link to="/adatok">Adatok</Link>
                    </li>
                </ul>
            </nav>
            <article>
                {/* Ide kerül majd az útvonalak/linkek által meghatározott tartalom */}
                <Outlet />
            </article>

        </>

    );

};



export default Layout;

