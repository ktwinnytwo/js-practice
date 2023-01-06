/* We'll have a form to search for a TV show from the TV API and
populate the ul list with the images of each show along with the title */

const form = document.querySelector('#searchForm');
const searchBtn = document.querySelector('button');
const input = document.querySelector('input');
const body = document.querySelector('body');
const clear = document.querySelector('#clearbtn');
const showContainer = document.querySelector('#showContainer')



const clearPage = () => {
    location.reload();
}
//event listener for clearing the page for new search
 clear.addEventListener('click', clearPage);


//add an event listener for the submission of the form

form.addEventListener('submit', async function (e) {
    e.preventDefault();
    //selecting the input and saving it in a variable 2 methods
    //query is the name of the input we had set in the html
    // Method 1: (dont select it up top with doc.queryselect)
    //const searchTerm = form.elements.query.value;
    //Method 2:
    const searchTerm = input.value;

    /* we're going to get the API along with the query string since we're searching
    through the shows according to the search term */
    //we can either 1. save the query string in a variable like config:
    //const config = { params: {q: searchTerm}}
    //or 2. we can just add in directly with a template literal
    const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`)

    const shows = res.data;
    //loop through the shows from the data
    for(const details of shows) {
        //save the images of each show in a variable as it loops
        const image = details.show.image;
        const title = details.show.name;
        /*Note: if I save details.show.image.medium to image, then I get an error because some images
        dont have a medium size, so we'll add medium in when we save the image source */

        if(image) {
            //Assuming there is an image then do the following:
            const newImg = document.createElement('img');
            newImg.src = image.medium;
            const span = document.createElement('span');
            span.innerText = `Title: ${title}`;
            const newLi = document.createElement('LI');
            newLi.append(newImg);
            newLi.append(span);
            showContainer.append(newLi);
        }    
    }    

    
})
