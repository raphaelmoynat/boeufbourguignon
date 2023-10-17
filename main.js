//alert('coucou')

const landing = document.querySelector('.landing')

let backgrounds = ["bgCocotte", "bgBocaux", "bgPoelleFonte"]

landing.classList.add(backgrounds[1])
landing.classList.remove(backgrounds[1])


// faire en sorte que le background alterne parmis les trois disponibles
// toutes les 3 secondes