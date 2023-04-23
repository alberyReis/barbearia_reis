function onclickMe() {
    const menu = document.querySelector('#menu')
    const navbar = document.querySelector('#navbar')
    const slogan = document.querySelector('#slogan')
    menu.addEventListener('click', function() {
        if (navbar.style.display == 'none') {
            navbar.style.display = 'flex' 
            slogan.style.display = 'none'
        } else {
            navbar.style.display = 'none' 
            slogan.style.display = 'block'
        }
    })
}
onclickMe()