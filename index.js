const iconoMenu = document.querySelector('#icono-menu');
const menu = document.querySelector('#menu');

iconoMenu.addEventListener('click', (e)=>{
    menu.classList.toggle('active');
    iconoMenu.classList.toggle('ocultar');
    document.body.classList.toggle('opacity');

    const rutaActual = e.target.getAttribute('src');
    if(rutaActual== 'https://cdn.icon-icons.com/icons2/1875/PNG/512/hamburgermenu_120234.png'){
        e.target.setAttribute('src','https://cdn.icon-icons.com/icons2/1875/PNG/512/hamburgermenu_120234.png');

    }
    else{
        e.target.setAttribute('src','https://cdn.icon-icons.com/icons2/1875/PNG/512/hamburgermenu_120234.png');
    }
});

