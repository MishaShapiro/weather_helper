import { ErrorPage } from "../components/main/error/ErrorPage";
import { HelpPage } from "../components/main/startpage/HelpPage";

async function getCoords() {
    console.log(1)
    const pos = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
    return {lon: pos.coords.longitude, lat: pos.coords.latitude}
}

async function getCity() {
    let lon = 0;
    let lat = 0;
    await new Promise((resolve) => {
        const input = document.querySelector(".searchinput")
        const link = `http://api.openweathermap.org/geo/1.0/direct?q=${input.value}&appid=c9e7381ef9cc636606964a73d2bd756e`
        const searchError = document.querySelector(".search__error_bar")
        fetch(link)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data)
            if (data.length === 0) {
                searchError.classList.add("search__error_bar_active")
                lon = "INCORRECT_CITY"
                lat = "INCORRECT_CITY"
            } else {
                lon = data[0].lon
                lat = data[0].lat
            }
            resolve()
        })
        .catch((err) => {
            console.log(err)
            searchError.classList.add("search__error_bar_active")
            lon = "INCORRECT_CITY"
            lat = "INCORRECT_CITY"
            resolve()
        })
    })
    return {lon: lon, lat: lat}
}

export async function sendFetch(setData, setPage, method) {
    const searchError = document.querySelector(".search__error_bar")
    searchError.classList.remove("search__error_bar_active")
    let coords = ""
    if (method === "loc") {
        coords = await getCoords()
    } else {
        coords = await getCity()
    }
    console.log(coords)
    if (coords.lat === "INCORRECT_CITY" && coords.lon === "INCORRECT_CITY") {
        setData(null)
    } else {
        // const link = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&units=metric&appid=c9e7381ef9cc636606964a73d2bd756e`
        const link = `https://api.openweathermap.org/data/2.5/forecast?lat=${coords.lat}&lon=${coords.lon}&units=metric&appid=c9e7381ef9cc636606964a73d2bd756e`

        const errorSet = setTimeout(() => {
            setData("Error")
            setPage(<ErrorPage />)
        }, 5000);

        fetch(link)
            .then((resp) => {
                console.log(resp)
                return resp.json()
            })
            .then((resp) => {
                clearTimeout(errorSet)
                setData(resp)
                setPage(<HelpPage />)
                console.log(resp)
            })
            .catch(() => {
                setData("Error")
                setPage(<ErrorPage />)
            })
    }
}