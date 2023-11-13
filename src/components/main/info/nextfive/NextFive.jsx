import "./NextFive.css"
import { dataConvertDMY } from "../DataConverter"
import { giveImg } from "../ImagesGiver"

export function NextFive({data}) {
    return (
        <div className="info__five_days info__five_days">
            <div className="five_days__block">
                <p>{dataConvertDMY(data.list[0].dt)}</p>
                <p className="five_days__temp"><strong>{data.list[0].main.temp}&deg;C</strong></p>
                <img width="100px" src={giveImg(data.list[0].weather[0].id)} alt="" />
            </div>
            <div className="five_days__block">
                <p>{dataConvertDMY(data.list[8].dt)}</p>
                <p className="five_days__temp"><strong>{data.list[8].main.temp}&deg;C</strong></p>
                <img width="100px" src={giveImg(data.list[8].weather[0].id)} alt="" />
            </div>
            <div className="five_days__block">
                <p>{dataConvertDMY(data.list[16].dt)}</p>
                <p className="five_days__temp"><strong>{data.list[16].main.temp}&deg;C</strong></p>
                <img width="100px" src={giveImg(data.list[16].weather[0].id)} alt="" />
            </div>
            <div className="five_days__block">
                <p>{dataConvertDMY(data.list[24].dt)}</p>
                <p className="five_days__temp"><strong>{data.list[24].main.temp}&deg;C</strong></p>
                <img width="100px" src={giveImg(data.list[24].weather[0].id)} alt="" />
            </div>
            <div className="five_days__block">
                <p>{dataConvertDMY(data.list[32].dt)}</p>
                <p className="five_days__temp"><strong>{data.list[32].main.temp}&deg;C</strong></p>
                <img width="100px" src={giveImg(data.list[32].weather[0].id)} alt="" />
            </div>
        </div>
    )
}