const PRESSURE_UNITS = 0.750862

export const capitalizeFirstLetter = (string) => {
    if (!string) return ''

    return string.charAt(0).toUpperCase() + string.slice(1)
}

export const getPressureMm = (hpa) => {
    return Math.round(hpa * PRESSURE_UNITS)
}

export const getTime = (seconds) => {
    return new Date(seconds * 1000).toLocaleString('ru-RU', { timezone: 'Atlantic/Reykjavik' })
}