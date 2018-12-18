// Get modal element
const modal = document.querySelector(".overlay");
// Get open modal button
const modalBtn = document.querySelector(".slider");
// Get close button
const closeBtn = document.querySelector(".modal-close");
// Get modal img
const modalImg = document.querySelector(".modal img");

// Listen for open click
modalBtn.addEventListener("click", openModal);
// Listen for close click
closeBtn.addEventListener("click", closeModal);
// Listen for outside click
window.addEventListener("click", outisdeClick);

// Function to open modal
function openModal(){
    modal.style.display = "grid";
    // Seteamos foto a mostrar
    modalImg.src = `img/galeria/${current}.jpg`;
}

// Function to close modal
function closeModal(){
    modal.style.display = "none";
}

// Function to close modal if outside click
function outisdeClick(e){
    // Checkeamos que estemos haciendo click en lo negrito
    if(e.target == modal){
        modal.style.display = "none";
    }
}