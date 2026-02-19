// Cargar header
fetch("components/header.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("header").innerHTML = data;
    });

// Cargar footer
fetch("components/footer.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;
    });


document.addEventListener("DOMContentLoaded", function () {

    const number = CONFIG.whatsapp.number;
    const message = encodeURIComponent(CONFIG.whatsapp.message);
    const url = `https://wa.me/${number}?text=${message}`;

    document.getElementById("btn-whatsapp").href = url;
    document.getElementById("float-whatsapp").href = url;

});

