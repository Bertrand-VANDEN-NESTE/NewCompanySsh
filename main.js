const btn = document.querySelector('.btn')
btn.addEventListener('click', () => {
btn.classList.toggle('active-two');
}); 

$(document).ready(function(){
    $('.btn').click(function(){
        $('.navbar').toggleClass('isOpen')
        $('.header').toggleClass('isOpen')
        $('.navbar__links').toggleClass('isOpen')
        $('body').toggleClass('isOpen')
        $('.logo').toggleClass('isOpen')
    });
});
