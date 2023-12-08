function daing() {
    let time = new Date()
// p1
    let years = time.getFullYear()
    let month = String(time.getMonth() + 1).padStart('2', '0')
    let day = String(time.getDate()).padStart('2', '0')
    document.querySelector('div.year').textContent = years
    document.querySelector('div.month').textContent = month
    document.querySelector('div.day').textContent = day

// p2

    let hour = String(time.getHours()).padStart('2', '0')
    let min = String(time.getMinutes()).padStart('2', '0')
    let sec = String(time.getSeconds()).padStart('2', '0')
    document.querySelector('div.hour').textContent = hour
    document.querySelector('div.min').textContent = min
    document.querySelector('div.sec').textContent = sec
}

daing()
setInterval(function () {
    daing()
}, 1000)
