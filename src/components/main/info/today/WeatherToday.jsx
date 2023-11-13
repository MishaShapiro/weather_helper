import { TodayBlock } from "./TodayBlock"
import "./WeatherToday.css"
import img_weather_temperature from "../../../../images/weather-temperature-forecast-svgrepo-com.svg"
import img_wind_alt from "../../../../images/wind-alt-svgrepo-com.svg"
import img_wind from "../../../../images/wind-svgrepo-com.svg"
import img_sun from "../../../../images/sun-svgrepo-com.svg"
import img_moon from "../../../../images/moon-svgrepo-com.svg"
import { dataConvertDMY, dataConvertHM } from "../DataConverter"
import { giveImg } from "../ImagesGiver"

export function WeatherToday({data, cityData}) {

    return (
            <div className="info__today">
                <p className="today__city">{cityData.name}</p>
                <p className="today__date">{dataConvertDMY(data.dt)}</p>
                <div className="today__maininfo">
                    <div className="today__temperature">
                        <p className="today__maintemp"><strong>{data.main.temp}&deg;C</strong></p>
                        <p className="today__description">{data.weather[0].main}</p>
                    </div>
                    <img width="200px" src={giveImg(data.weather[0].id)} alt="NewIco"/>
                </div>
                <div className="today__otherinfo">
                    <TodayBlock 
                        theam={"Pressure "} 
                        value={data.main.pressure} 
                        src={img_weather_temperature}
                        new_svg={""}
                    />
                    <TodayBlock
                        theam={"Humidity"}
                        new_svg={data.main.humidity}
                    />
                    <TodayBlock
                        theam={"Wind speed: "}
                        value={data.wind.speed}
                        src={img_wind_alt}
                        sec_theam={"Wind gust: "}
                        sec_value={data.wind.gust}
                        sec_src={img_wind}
                        new_svg={""}
                    />
                    <TodayBlock
                        theam={"Sunrise: "}
                        value={dataConvertHM(cityData.sunrise)}
                        src={img_sun}
                        sec_theam={"Sunset: "}
                        sec_value={dataConvertHM(cityData.sunset)}
                        sec_src={img_moon}
                        new_svg={""}
                    />
                </div>
            </div>
    )
}