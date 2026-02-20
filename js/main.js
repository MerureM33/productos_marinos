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

    // Detectar si es dispositivo móvil
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    let url;

    if (isMobile) {
        // En móviles abre la app directamente
        url = `https://wa.me/${number}?text=${message}`;
    } else {
        // En PC abre WhatsApp Web
        url = `https://web.whatsapp.com/send?phone=${number}&text=${message}`;
    }

    const btnWhatsapp = document.getElementById("btn-whatsapp");
    const floatWhatsapp = document.getElementById("float-whatsapp");

    if (btnWhatsapp) btnWhatsapp.href = url;
    if (floatWhatsapp) floatWhatsapp.href = url;

});

