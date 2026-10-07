let baslıq = document.getElementById("baslıq");
let düymə = document.getElementById("düymə");

düymə.addEventListener("click", function() {
    baslıq.textContent = "Müəllim mövzunu tam başa düşdüm.";
    baslıq.style.color = "green";
});