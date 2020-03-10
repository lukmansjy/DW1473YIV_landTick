// param number
exports.toIdr = (number) => {
    let reverse = number.toString().split('').reverse().join('')
    let idr = `Rp. ${reverse.match(/\d{1,3}/g).join('.').split('').reverse().join('')}`
    return idr
}

// param date ex '2020-03-08'
exports.toFullDayName = (dateString) =>{
    const d = new Date(dateString);

    // Day Name
    const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
    const dayName = days[d.getDay()]

    // Month Name 
    const monthList = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
    const monthName = monthList[d.getMonth()]

    const fullDayNeme = `${dayName}, ${d.getDate()} ${monthName} ${d.getFullYear()}`
    return fullDayNeme
}

// param date time ex '2020-03-08 07:00:00', '2020-03-08 19:00:00'
exports.timeRange = (dateStart, dateEnd) =>{
    const dStart = new Date(dateStart)
    const dEnd = new Date(dateEnd)
    const miliSec =  dEnd - dStart
    const hour = ( ( (miliSec / 1000) / 60 ) / 60 ).toFixed(0) + ' Jam'
    return hour
}