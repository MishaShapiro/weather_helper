export function dataConvertHM(date) {
    return new Date(date * 1000).toLocaleString("ru", {hour: "numeric", minute: "numeric"})
}

export function dataConvertDMY(date) {
    return new Date(date * 1000).toLocaleString("ru", {day: "numeric", month: "numeric", year: "numeric"})
}