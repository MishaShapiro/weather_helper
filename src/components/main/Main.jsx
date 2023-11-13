import { Buttons } from "./buttons/Buttons"
import { Info } from "./info/Info"
import { NextFive } from "./info/nextfive/NextFive"
import { WeatherToday } from "./info/today/WeatherToday"
import { StartPage } from "./startpage/StartPage"

export function Main({data, page, setPage}) {

    function clearAll() {
        const btns = document.querySelectorAll(".btn")
        btns.forEach((element) => {
            element.classList.remove("btn_active")
        })
    }

    const btn_today = () => {
        setPage(<WeatherToday data={data.list[0]} cityData= {data.city}/>)
        const curbtn = document.querySelector(".btn_today")
        clearAll()
        curbtn.classList.add("btn_active")
    }
    const btn_tomorrow = () => {
        setPage(<WeatherToday data={data.list[8]} cityData={data.city}/>)
        const curbtn = document.querySelector(".btn_tomorrow")
        clearAll()
        curbtn.classList.add("btn_active")
    }
    const btn_nextfive = () => {
        setPage(<NextFive data={data}/>)
        const curbtn = document.querySelector(".btn_nextfive")
        clearAll()
        curbtn.classList.add("btn_active")
    }

    if (data === "Waiting" || data === "Error") {
        return (
            <main className="main">
                <Info page={page}/>
            </main>
        )
    } else if (data) {
        return (
            <main className="main">
                <Buttons first = {btn_today} seconde = {btn_tomorrow} third = {btn_nextfive}/>
                <Info page={page}/>
            </main>
        )
    } else {
        return (
            <StartPage />
        )
    }
}