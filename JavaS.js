document.ready(openPag(event,'PagPrincipal'))



function TrocarCor(x){
    x.style.color= "#571c56"
    x.addEventListener("mouseleave",function(){x.style.color="#f8d092"})
}



function openPag(evento, pagina) {
    let i, tabcontent, tablinks;
    
  
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    document.getElementById(pagina).style.display = "block";
    evento.currentTarget.className += " active";
  }