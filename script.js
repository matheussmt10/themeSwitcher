

function themeSwitcher() {
    let checkbox = document.getElementById('switch')
    let background = document.getElementById('background')

    
    if (checkbox.checked){
        background.style.background = '#292C35'
        background.style.transition = ' .3s'
        console.log('escuro')
        
    } else {
        background.style.background = '#F1F1F1'
        console.log('claro')
    }
    
}