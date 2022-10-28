const signUpBtn = document.getElementById('signUp');
const singInBtn = document.getElementById('signIn');
const container = document.getElementById('container');

signUpBtn.addEventListener('click',() =>{
    container.classList.add('right-panel-active');

});

singInBtn.addEventListener('click',() =>{
    container.classList.remove('right-panel-active');

});

const signUpHere = document.querySelector('.signUpHere');
const signInHere = document.querySelector('.signInHere');
signUpHere.addEventListener('click',() =>{
    container.classList.add('active-mobile');


});
signInHere.addEventListener('click',() =>{

    container.classList.remove('active-mobile');
});
window.onresize = function() {
    var sce = window.innerWidth;
    if(sce <= 768){

        container.classList.remove('right-panel-active');
    }
};

/// xac nhan form dang ky




