import "./Buttons.css"

export function Buttons({first, seconde, third}) {
    return (<div className="buttons">
                <button className="btn btn_today" onClick={first}>Today</button>
                <button className="btn btn_tomorrow" onClick={seconde}>Tomorrow</button>
                <button className="btn btn_nextfive" onClick={third}>Next 5 Days</button>
            </div>)
}
