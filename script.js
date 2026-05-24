function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = new Date()
    var min = minuto.getMinutes()
    var segundos = new Date()
    var seg = segundos.getSeconds()
    var body = window.document.getElementById('body')
    var recado = window.document.getElementById('recado')
    var sac = window.document.getElementById('sac')
    var musica = document.getElementById('musica')
    musica.play()
    musica.muted = false
    msg.innerHTML = `Agora são ${hora}:${min}:${seg}`
    setInterval(carregar, 1000)

    if (hora >= 0 && hora <12) {
        //bom dia
        img.src = 'fotomanhã.png'
        sac.style.boxShadow = '5px 5px 150px rgb(0, 0, 150)'
        recado.innerHTML = 'Bom Dia ☀️'
    } else if (hora >=12 && hora < 18){
        //boa tarde
        img.src = 'fototarde.png'
        body.style.backgroundColor = 'rgb(255, 128, 10)'
        sac.style.boxShadow = '5px 5px 150px rgb(145, 70, 0)'
        recado.innerHTML = 'Boa Tarde 🌤️'
    } else {
        //boa noite
        img.src = 'fotonoite.png'
        body.style.backgroundColor = 'rgb(2, 0, 90)'
        sac.style.boxShadow = '5px 5px 150px rgb(1, 2, 29)'
        recado.innerHTML = 'Boa Noite 🌙'
    }
}

