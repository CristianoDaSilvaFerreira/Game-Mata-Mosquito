function startGame() {
    var level = document.getElementById('level').value

    if(level === ''){
        alert('Selecione un nível para iniciar o jogo')
        return false
    }

    alert(level)
}