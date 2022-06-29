function newImage(url){
    let image = document.createElement('img')
    image.src = url
    // image.style.position = 'fixed'
    // image.style.left = left + 'px'
    // image.style.bottom = bottom + 'px'
    document.body.append(image)
    return image
}

function move(image){
    image.style.position = 'fixed'
    
    function moveToCoordinates(left, bottom){
        image.style.left = left + 'px'
        image.style.bottom = bottom + 'px'
    }   
    function enlargeChar(height, width) {
        image.style.width = width + "px"
        image.style.height = height + "px"
    }

    return {
        to: moveToCoordinates,
        Baaa: enlargeChar
    }
}

const imageTest = newImage("assets/green-character.gif");
const acitiveItem = move(imageTest);
acitiveItem.to(100, 200);

imageTest.addEventListener("click", () => {
  acitiveItem.to(400, 400);
  acitiveItem.Baaa(400, 500);
});

// move(greenCharacter)
//let greenCharacter = newImage('assets/green-character.gif')
//let thingThatMoveReturns = move(greenCharacter)
// move(greenCharacter, 100, 250)

newImage('assets/tree.png', 200, 450)
newImage('assets/pillar.png', 350, 250)
newImage('assets/pine-tree.png', 450, 350)
newImage('assets/crate.png', 150, 350)
newImage('assets/well.png', 500, 575)


function newItem(url, left, bottom){
    let item = newImage(url, left, bottom)
    item.addEventListener('click', () => {
        item.remove()
        let inventoryItem = document.createElement('img')
        inventoryItem.src = url;
        inventory.append(inventoryItem)
    })
    return item
}

newItem('assets/sword.png', 500, 555)
newItem('assets/shield.png', 165, 335)
newItem('assets/staff.png', 600, 250)

function newInventory(){
    let inventory = document.createElement('div')
    inventory.style.position = 'fixed'
    inventory.style.bottom = '0px';
    inventory.style.left = '0px'
    inventory.style.width = '100%'
    inventory.style.height = '100px'
    inventory.style.display = 'flex'
    inventory.style.flexDirection = 'row'
    inventory.style.alignItems = 'center'
    inventory.style.justifyContent = 'space-evenly'
    inventory.style.border = '2px solid black'
    inventory.style.backgroundColor = 'brown'
    document.body.append(inventory)
    return inventory
}

const inventory = newInventory()