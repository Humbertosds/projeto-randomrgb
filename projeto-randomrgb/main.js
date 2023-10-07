function changeColor() {
    const color = document.body.style.backgroundColor =
        'rgb( ' + Math.floor(Math.random() * 255) + ', ' +
        Math.floor(Math.random() * 255) + ', ' +
        Math.floor(Math.random() * 255) + ')'
    
    document.querySelector('.nameOfColor').innerHTML = `Cor Gerada: ${color}`
}