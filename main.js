console.log(window.document)
console.log(window.console)
console.log(window.document === document);
console.log(document.querySelector('#header').tagName);
console.log(document.querySelector('#headr h1').innerText);


const header = document.querySelector('#header');

header.querySelector('h1')
     .innerHTML = '!!! New Heading <span>(10)</span> !!!';
 
     console.log(header.querySelector('h1').innerHTML);
     console.log(header.querySelector('body').innerHTML);
     console.log(document.body.firstElementChild);

const image = document.createElement('img');
 console.log(location.origin);   
 image.setAttribute('src', `${location.origin}/images`); 
 console.log(image.src);
 console.log(image.getAttribute('src'));


 let flag = false;
 document.getElementById(toogle);
 document.getElementById(toogle).addEventListener('click', () => {
     flag =!flag;
     console.log(flag);
 });



 const li = document.querySelectorAll('.nav-item active');
 for (let val of li) {
     console.log(val.innerText);
    }

 function scrollToTop() {
     window.scrollTo({
         top: 0,
         behavior:'smooth'
     });
 } 
 
 $(document).ready(function() {
    $(".zoomable-image").on("click", function() {
        $(this).toggleClass("zoomed"); // добавляем/удаляем класс zoomed при клике на изображение
    });
});
function showPopup() {
    alert("Вы активировали картинку!");
}





