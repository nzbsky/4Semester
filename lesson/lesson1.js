const colorPalette = document.querySelector('.color-palette')

const createPaletItems = () => {
    const items = []

    for (let i = 0; i < 36; i += 1){
     const color = getRandomHexColor()
        
        const item = document.createElement('button')
           item.classList.add('item')
            item.type = "button"
            item.style.backgroundColor = color
            items.push(item)     
          
    }
    colorPalette.append(...items)
    
     
}
createPaletItems()



function getRandomHexColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
  
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    
}



