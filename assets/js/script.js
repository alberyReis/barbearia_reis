(function onclickMenu() {
    const menu = document.querySelector('#menu')
    const navbar = document.querySelector('#navbar')
    menu.addEventListener('click', function() {
        if (navbar.style.display == 'none') {
            navbar.style.display = 'flex' 
        } else {
            navbar.style.display = 'none' 
        }
    })
})()