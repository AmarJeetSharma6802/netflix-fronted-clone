const boxes = document.querySelectorAll('.box');

boxes.forEach((box, index) => {
    const svg = box.querySelector('.svg');
    const plusIcon = box.querySelector(`#plus-icon-${index + 1}`);
    const closeIcon = box.querySelector(`#close-icon-${index + 1}`);
    const para = box.querySelector('.para-toggle');

    svg.addEventListener("click", () => {
        para.classList.toggle("show");
        plusIcon.style.display = para.classList.contains("show") ? "none" : "block";
        closeIcon.style.display = para.classList.contains("show") ? "block" : "none";
    });
});


// second method 
// const svg = document.getElementById("toggle-svg");
// const plusIcon = document.getElementById("plus-icon");
// const closeIcon = document.getElementById("close-icon");
// const para = document.querySelector(".para-toggle");
// const boxes = document.querySelectorAll('.box');


// svg.addEventListener("click", () => {
//     para.classList.toggle("show");
//     plusIcon.style.display = para.classList.contains("show") ? "none" : "block";
//     closeIcon.style.display = para.classList.contains("show") ? "block" : "none";
// });