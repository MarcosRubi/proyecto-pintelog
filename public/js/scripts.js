window.addEventListener('load', () => {

  if (window.location.href.indexOf("iniciar-sesion") > -1 || window.location.href.indexOf("registro") > -1) {
    let container = document.querySelector('.box');

    let btnStep1 = document.getElementById('showModal');
    let divModalStep1 = document.getElementById('modalStep1');
    let btnCloseStep1 = document.getElementsByClassName("close")[0];

    let btnStep2 = document.getElementById('submitEmail');
    let divModalStep2 = document.getElementById('modalStep2');
    let btnCloseStep2 = document.getElementsByClassName("close")[1];

    let btnStep3 = document.getElementById('submitCode');
    let divModalStep3 = document.getElementById('modalStep3');
    let btnCloseStep3 = document.getElementsByClassName("close")[2];

    let btnStep4 = document.getElementById('submitResPassword');

    btnStep1.onclick = function () {
      divModalStep1.style.display = 'block';
      container.style.filter = 'blur(4px)';
    }

    btnCloseStep1.onclick = function () {
      divModalStep1.style.display = 'none';
      container.style.filter = '';
    }

    btnStep2.onclick = function (e) {
      e.preventDefault();
      divModalStep1.style.display = 'none';
      divModalStep2.style.display = 'block';
    }

    btnCloseStep2.onclick = function () {
      divModalStep2.style.display = 'none';
      container.style.filter = '';
    }

    btnStep3.onclick = function (e) {
      e.preventDefault();
      divModalStep2.style.display = 'none';
      divModalStep3.style.display = 'block';
    }

    btnCloseStep3.onclick = function () {
      divModalStep3.style.display = 'none';
      container.style.filter = '';
    }

    btnStep4.onclick = function (e) {
      e.preventDefault();
      divModalStep3.style.display = 'none';
      container.style.filter = '';
    }
  }
  
  if (window.location.href.indexOf("usuario") > -1){
    let menu = document.getElementById('submenu');

    menu.onclick = function(){
      document.querySelector('.submenu').classList.toggle('d-block');
    }
  }

})