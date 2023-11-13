import "./TodayBlock.css"

export function TodayBlock({theam, value, src, sec_theam, sec_value, sec_src, new_svg}) {

    if (new_svg !== "") {
        const svg_dashoffset = `${565 - +new_svg*5.65}px`
        return (
            <div className="today__block">
                <p>{theam}<strong>{value}</strong></p>
                <svg width="170" height="170" viewBox="-25 -25 250 250" version="1.1" xmlns="http://www.w3.org/2000/svg" style={{transform: "rotate(-90deg)"}}>
                            <circle r="90" cx="100" cy="100" fill="transparent" stroke="#e0e0e0" strokeWidth="16px" strokeDasharray="565.48px" strokeDashoffset="0"></circle>
                            <circle r="90" cx="100" cy="100" stroke="#76e5b1" strokeWidth="16px" strokeLinecap="round" strokeDashoffset={svg_dashoffset} fill="transparent" strokeDasharray="565.48px"></circle>
                            <text x="52px" y="117px" fill="#6bdba7" fontSize="52px" fontWeight="bold" style={{transform:"rotate(90deg) translate(0px, -196px)"}}>{new_svg + "%"}</text>
                        </svg>
                <p>{sec_theam}<strong>{sec_value}</strong></p>
                <img width="60px" src={sec_src} alt=""/>
            </div>
        )
    }

    return (
        <div className="today__block">
            <p>{theam}<strong>{value}</strong></p>
            <img width="70px" src={src} alt=""/>
            <p>{sec_theam}<strong>{sec_value}</strong></p>
            <img width="60px" src={sec_src} alt=""/>
        </div>
    )
}