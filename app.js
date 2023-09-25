function toggleMode () {
    const html = document.querySelector('html')
    
    html.classList.toggle('light')

    //Obter TAG img
    const img = document.querySelector('#profile img')

    //Substituir a img
    if(html.classList.contains('light')) {
    //Se light => adicionar imagem
    img.setAttribute('src', './assets/avatar-light.png')
    img.setAttribute('alt', 'Foto Mayk Brito sorrindo, óculos escuro, blusa preta, fundo roxo e azul.')
    } else {
        //Se sem light => manter imagem atual
        img.setAttribute('src', './assets/avatar.png')
    }

}