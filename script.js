 let icon = document.querySelector('.icon');
 let ul = document.querySelector('ul');
 
 icon.addEventListener('click', function(){
    ul.classList.toggle("data");


    if(ul.className == "showData"){
        document.getElementById("bar").className = "fa-solid fa-staggered";
    }else{
        document.getElementById("bar").className = "fa-solid fa-xmark";
    }
})

 