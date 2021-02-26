const checkbox = document.querySelector('#switch');
const div = document.querySelector('#dark-mode-div')

if(window.matchMedia('(prefers-color-scheme: dark)').matches == true){
    checkbox.checked = true;
    document.body.classList.add("is-dark-mode");
};

checkbox.addEventListener('change', function() {
        document.body.classList.toggle("is-dark-mode");
  });


    



