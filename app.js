let mainPage = document.getElementById('main-page');
let radioBtn = document.querySelectorAll('input[name=rating');
let submitBtn = document.querySelector('button');
let ratingSubmit = document.querySelector('.rating-submit');
let ratingValue = document.querySelector('.number-rating');


submitBtn.addEventListener('click', function() {
    radioBtn.forEach(function(rating){
        if(rating.checked) {
            ratingValue.innerText = rating.value; 
            mainPage.classList.add('hide-list');
            ratingSubmit.classList.remove('hide-list');
        }
    })
});
