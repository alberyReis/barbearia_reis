function onclickMe() {
    const menu = document.querySelector('#menu')
    const navbar = document.querySelector('#navbar')
    const slogan = document.querySelector('#slogan')
    menu.addEventListener('click', function() {
        if (navbar.style.display == 'none') {
            navbar.style.display = 'flex' 
            slogan.style.margin = '5px'
        } else {
            navbar.style.display = 'none' 
            
        }
    })
}
onclickMe()