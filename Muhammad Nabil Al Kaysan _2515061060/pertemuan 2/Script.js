// Menjalankan script setelah halaman selesai dimuat
document.addEventListener("DOMContentLoaded", function () {


    const nama = document.querySelector(".header h1");

    const jam = new Date().getHours();
    let salam = "";

    if (jam >= 5 && jam < 11) {
        salam = "Selamat Pagi";
    } else if (jam >= 11 && jam < 15) {
        salam = "Selamat Siang";
    } else if (jam >= 15 && jam < 18) {
        salam = "Selamat Sore";
    } else {
        salam = "Selamat Malam";
    }

    nama.insertAdjacentHTML(
        "afterend",
        `<p style="color:#555; margin-top:5px;">${salam}, Selamat Datang!</p>`
    );

    const foto = document.querySelector(".foto");

    foto.addEventListener("mouseenter", function () {
        foto.style.transform = "scale(1.08)";
        foto.style.transition = "0.3s";
    });

    foto.addEventListener("mouseleave", function () {
        foto.style.transform = "scale(1)";
    });

    const boxes = document.querySelectorAll(".box");

    boxes.forEach((box, index) => {
        box.style.opacity = "0";
        box.style.transform = "translateY(30px)";

        setTimeout(() => {
            box.style.transition = "0.6s ease";
            box.style.opacity = "1";
            box.style.transform = "translateY(0)";
        }, index * 250);
    });

    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const tujuan = document.querySelector(this.getAttribute("href"));

            if (tujuan) {
                tujuan.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    const footer = document.querySelector("footer");

    if (footer) {
        footer.innerHTML += `<br>&copy; ${new Date().getFullYear()} Muhammad Nabil Al Kaysan`;
    }

});