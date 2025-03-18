document.addEventListener("DOMContentLoaded", function () {
    let images = [];

    for (let i = 1; i <= 25; i++) {
        images.push(`images/IMG_${i}.JPG`);
    }

    const galleryContainer = document.querySelector(".row");
    const columns = [[], [], [], []];

    images.forEach((image, index) => {
        columns[index % 4].push(image);
    });

    columns.forEach((columnImages) => {
        const columnDiv = document.createElement("div");
        columnDiv.classList.add("column");

        columnImages.forEach((imgSrc) => {
            const imgElement = document.createElement("img");
            imgElement.src = imgSrc
            imgElement.onclick = () => openLightbox(imgSrc);
            columnDiv.appendChild(imgElement);
        });

        galleryContainer.appendChild(columnDiv);
    })

    function openLightbox(imageSrc) {
        const lightbox = document.getElementById("lightbox");
        const lightboxImg = document.getElementById("lightbox-img");
        
        if (lightbox && lightboxImg) {
            lightboxImg.src = imageSrc;
            lightbox.style.display = "flex";
        } else {
            console.error("Lightbox elements not found in the document.");
        }
    }

});
