import WT_sunny from "../../../images/weather_types_sunny.png"
import WT_a_few_cloudly from "../../../images/weather_types_few_cloudly.png"
import WT_cloudly from "../../../images/weather_types_cloudly.png"
import WT_very_cloudly from "../../../images/weather_types_very_cloudly.png"
import WT_rainy from "../../../images/weather_types_rainy.png"
import WT_snowy from "../../../images/weather_types_snowy.png"
import WT_storm from "../../../images/weather_types_storm.png"
import WT_windy from "../../../images/weather_types_windy.png"

export function giveImg(id) {
    id = +id
    if (id >= 200 && id <= 232) {
        return WT_storm
    } else if ((id >= 300 && id <= 321) || (id >= 500 && id <= 504) || (id >= 520 && id <= 531)) {
        return WT_rainy
    } else if (id == 511 || (id >= 600 && id <= 622)) {
        return WT_snowy
    } else if (id >= 701 && id <= 781) {
        return WT_windy
    } else if (id === 800) {
        return WT_sunny
    } else if (id === 801) {
        return WT_a_few_cloudly
    } else if (id === 802) {
        return WT_cloudly
    } else if (id === 803 || id === 804) {
        return WT_very_cloudly
    } 
}