//alert('coucou')

const landing = document.querySelector('.landing')

let backgrounds = ["bgCocotte", "bgBocaux", "bgPoeleFonte"]

setInterval(  change , 1000 )

let index = 0
function change(){
    landing.classList.remove(backgrounds[index])
    index++
    if (index == backgrounds.length){
        index = 0
    }
    landing.classList.add(backgrounds[index])
}