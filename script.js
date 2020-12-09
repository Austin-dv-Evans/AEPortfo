console.log('script connected')

let theme = localStorage.getItem('theme')

let themeDots = document.getElementsByClassName('theme-dot')

for (var i =0; themeDots.length > i; i++){
    themeDots[i].addEventListener('click', function() {
        let mode = this.dataset.mode
        console.log('Option Clicked', mode)
        setTheme(mode)
        // checked="checked"
    })
}

const setTheme = (mode) => {
    if(mode == 'default'){
        document.getElementById('theme-style').href = 'index.css'
    }
    if(mode == 'avalanche'){
        document.getElementById('theme-style').href = 'avs.css'
    }
    if(mode == 'broncos'){
        document.getElementById('theme-style').href = 'broncos.css'
    }
    if(mode == 'nuggets'){
        document.getElementById('theme-style').href = 'nuggets.css'
    }
    localStorage.setItem('theme', mode)
}

if(theme == null){
    setTheme('default')
}else{
    setTheme(theme)
}