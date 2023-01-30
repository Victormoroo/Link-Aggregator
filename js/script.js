function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    // img
    const img = document.querySelector('#profile img')

    if(html.classList.contains('light')) {
        img.setAttribute('src', './assets/img/light mode avatar.png')
    }
    else {
        img.setAttribute('src', './assets/img/dark mode avatar.png')
    }
}