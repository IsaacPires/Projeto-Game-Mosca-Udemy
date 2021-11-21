var altura = 0
var largura = 0
var x = 1
var contagem = 30
var tempo
    

//ajustando a area que as moscas apareceram
function ajusteArea(){
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(altura, largura)
}

ajusteArea()

//criação do cronmetro e setando condição de vitoria
var cronometro = setInterval(function(){
    contagem -= 1
    if(contagem<0){
        clearInterval(cronometro)
        clearInterval(tempo)

        window.location.href ='win.html'
    }else{
    document.getElementById('time').innerHTML = contagem
    }
},1000)





//setando condição de derrota e difinindo aparição e remoção do elemento 'mosca'
function posicaoRandom(){

    if(document.getElementById('mosca')){
        document.getElementById('mosca').remove()

        if(x > 3){
            window.location.href ='gameOver.html'
        }else{

        document.getElementById('v'+x).src= "../img/coracao_vazio.png"
        x++

        }   

}


var posicaoY = Math.floor(Math.random() * altura) - 100
var posicaoX = Math.floor(Math.random() * largura) - 100

//não permitindo aparição do elemento em um local negativo 
posicaoX = posicaoX < 0 ? 0 : posicaoX
posicaoY = posicaoY < 0 ? 0 : posicaoY

//criação do elemento
var mosca = document.createElement('img')
mosca.src = 'img/mosca.png'
mosca.className = 'mosca1'
mosca.style.left = posicaoX + 'px'
mosca.style.top = posicaoY + 'px'
mosca.style.position = 'absolute'
mosca.id = 'mosca'
mosca.onclick = function(){
    this.remove()
}


document.body.appendChild(mosca)

}

