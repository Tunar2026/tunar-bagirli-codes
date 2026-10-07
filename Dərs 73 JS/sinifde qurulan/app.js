// HTML-də olan elementləri gətiririk

let kateqoriyaGiris = document.querySelector("#kateqoriyaGiris");
let sayGiris = document.querySelector("#sayGiris");
let sekilLinkGiris = document.querySelector("#sekilLinkGiris");
let elaveEtDuymesi = document.querySelector("#elaveEtDuymesi");
let cedvelGovdesi = document.querySelector("#cedvelGovdesi");
let sekilOnBaxis = document.querySelector("#sekilOnBaxis");

// Şəkil linki xanasına nəsə yazdıqda şəkil görünəcək

sekilLinkGiris.addEventListener("input", function () {

    if (sekilLinkGiris !== "") {

        sekilOnBaxis.src = sekilLinkGiris.value;
        sekilOnBaxis.style.display = "block";

    } else {

        sekilOnBaxis.style.display = "none";

    }

});

// 3. "Əlavə et" düyməsinə klik edəndə məlumat cədvələ düşsün

elaveEtDuymesi.addEventListener("click", function () {

    //a. Inputdakı dəyərləri götürək

    let kateqoriya = kateqoriyaGiris.value;
    let say = sayGiris.value;
    let sekilUnvani = sekilLinkGiris.value;


    //b. Xanalardan biri boşdursa, xəbərdarlıq et, əməliyyatı saxla

    // if(kateqoriya === "" || say === "" || sekilUnvani === ""){
    //     alert("Zəhmət olmasa, bütün xanaları doldurun !");
    //     return;
    // }


    //c. Məhsul kodu yaratmaq (Təsadüfi)

    let yaradilanKod = "KOD-" + Math.floor(Math.random() * 900 + 100);


    //d. Cədvəlin içinə göndərəcəyimiz məlumatı səliqəyə salmaq

    let yeniSatir = "<tr>";
    yeniSatir += "<td>" + yaradilanKod + "</td>";
    yeniSatir += "<td>" + kateqoriya + "</td>";
    yeniSatir += "<td>" + say + "</td>";
    yeniSatir += "<td><img src='" + sekilUnvani + "' width='50' height='50'></td>";
    yeniSatir += "<td><button onclick='if(confirm(\"Silməyə əminsiz ?\")) this.parentElement.parentElement.remove()' class='btn btn-danger'>Sil</button></td>";
    yeniSatir += "</tr>";

    cedvelGovdesi.innerHTML += yeniSatir;

    //e. Xanalari təmizləyirik (növbəti məhsul üçün)

    kateqoriyaGiris.value = "";
    sayGiris.value = "";
    sekilLinkGiris.value = "";

    sekilOnBaxis.style.display = "none";

});