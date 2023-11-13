import "./Header.css";
import logo_user from "../../images/logo_user.png"

export function Header({shortDate, longDate, setData}) {
    return (
        <div className="container">
            <header className="header">
                <div className="currentdate">
                    <p className="shortDate">{shortDate}</p>
                    <p className="longDate">{longDate}</p>
                </div>
                <div className="search">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16"> <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/> </svg>
                    <input className="searchinput" type="text" placeholder="Search City..." />
                    <p className="search__error_bar"><strong><em>Неправльно указан город!</em></strong></p>
                </div>
                <div className="header_btns">
                    <button className="header_btn get_city_btn" onClick={setData.bind(this, "city")}>По городу</button>
                    <button className="header_btn get_location_btn" onClick={setData.bind(this, "location")}>По местоположению</button>
                </div>
                <img className="img" src={logo_user} width="50px" height="50px" alt="User.png" />
            </header>
            <hr />
        </div>
    );
}
