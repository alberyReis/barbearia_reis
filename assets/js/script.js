function onclickMe() {
    const menu = document.querySelector('#menu')
    const navbar = document.querySelector('#navbar')
    const slogan = document.querySelector('#slogan')
    menu.addEventListener('click', function() {
        if (navbar.style.display == 'none') {
            navbar.style.display = 'flex' 
        } else {
            navbar.style.display = 'none' 
        }
    })
}
onclickMe()