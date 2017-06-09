var button = document.querySelector('.menu-button');
       var toggle = false;

       button.onclick = function () {
           if (toggle) {
               toggle = false;
               button.style.display = 'none';
           } else {
               toggle = true;
               button.style.display = 'block';
           }
       }
