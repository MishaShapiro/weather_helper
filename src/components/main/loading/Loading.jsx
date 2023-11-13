import loading_svg from "../../../images/loading.svg"
import "./Loading.css"

export function Loading() {
    return (
        <div id="loading_container">
            <img id="loading_svg" src={loading_svg} alt="" />
        </div>
    )
}