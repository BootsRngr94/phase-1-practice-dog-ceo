//Challenge 1
//fetch dog images
fetch("https://dog.ceo/api/breeds/image/random/4")
    .then((resp) => resp.json())
    .then((data) => renderImgs(data.message));
//fetch dog breeds
fetch("https://dog.ceo/api/breeds/list/all")
    .then((resp) => resp.json())
    .then((data) => {
        renderBreeds(Object.keys(data.message))
        filterBreeds(Object.keys(data.message))
    })
function renderImgs(urlArr){
    //console.log(urArr)

    //Steps every time you are creating a new image//
    //1. forEach loop to get each 
    //2. create an image tag
    //3. set image src to url
    //4. append image to dom (in this instance append to div with id of dog-image-container)
    
    const divForImgs = document.querySelector('#dog-image-container')
    urlArr.forEach((url) => {
        //console.log(url)
        const img = document.createElement('img')
        img.src = url
        divForImgs.append(img)
    })
}

function renderBreeds(breedArr){
    //console.log(breedArr)
    const dropdown = document.querySelector('#breed-dropdown')
    
    console.log(dropdown)

    //adds the breeds to the page in th <ul> provided in index.html
    //1. grab ul with id of dog-breeds
    //2. loop over breedArr with forEach to get each breed
    //3. make li for each breed
    //4. make li textContent = breed
    //5. append li to ul

    const ulForBreeds = document.querySelector('#dog-breeds')
    
    breedArr.forEach((breed) => {
        const li = document.createElement('li')
        li.textContent = breed
        //added event listener here
        li.addEventListener('click', (e) => {
            // 'e.target' & 'li' are the same in what they do here(as long as you have (e). They tell you which li is clicked.
            //console.log(e.target)

            //changes the li color when clicked
            e.target.style.color = 'green'
        })
        ulForBreeds.appendChild(li)
    })
}
function filterBreeds(breedArr) {
    console.log(breedArr)

    const dropdown = document.querySelector('#breed-dropdown')

    dropdown.addEventListener('change', (e) => handleChange(e))
    //console.log(dropdown)
    function handleChange(e){
        //'e.atrget.value' is the selected letter
        const filteredBreeds = breedArr.filter((breed) => {
            //you can use either of these returns. They get the same result.
            // vvv
            //return breed[0] == e.target.value
            return breed.startsWith(e.target.value)
            //^ i prefer this one
            // v below shows an 'if else' example v

            //if (breed[0] == e.target.value){
            //    return true
            //} else {
            //    return false
            //}

        })
        //this renders just the dog breeds that begin with the letter selected in the drop down
        const ul = document.querySelector('#dog-breeds')
        ul.textContent = ""

        renderBreeds(filteredBreeds)
    }
}

//1. get all dog breeds
//2. filter dog breeds based on dropdown letter (change event?)
    // change event for drop down
    // get letter changed to
//3. render filtered dog breeds to that ul