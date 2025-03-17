document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll(".sidebar-link").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });

    const galleryContainer = document.getElementById("slider-container");
    const zoomedImage = document.getElementById("zoomed-image");

    // List of uploaded images (update with your actual filenames)
    const images = [
        "images/art1.webp",
        "images/art2.webp",
        "images/art3.webp"
    ];

    // Set the first image as the default zoomed image
    zoomedImage.src = images[0];

    images.forEach(imageSrc => {
        let img = document.createElement("img");
        img.src = imageSrc;
        img.alt = "Artwork";
        img.classList.add("slider-thumbnail");
        img.addEventListener("click", function () {
            zoomedImage.src = imageSrc;
        });
        galleryContainer.appendChild(img);
    });
});
