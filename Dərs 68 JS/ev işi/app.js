let date = document.getElementById("date");
let time = document.getElementById("time");

function saat() {
    let indi = new Date();

    // TARİX
    let gun = indi.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
    });

    // SAAT
    let saat = indi.getHours();
    let deqiqe = indi.getMinutes();
    let saniye = indi.getSeconds();

    let ampm = "AM";

    if (saat >= 12) {
        ampm = "PM";
    }

    if (saat > 12) {
        saat = saat - 12;
    }

    if (saat == 0) {
        saat = 12;
    }

    if (saat < 10) {
        saat = "0" + saat;
    }

    if (deqiqe < 10) {
        deqiqe = "0" + deqiqe;
    }

    if (saniye < 10) {
        saniye = "0" + saniye;
    }

    date.textContent = gun;
    time.textContent = saat + ":" + deqiqe + ":" + saniye + " " + ampm;
}

saat();

setInterval(saat, 1000);