
window.addEventListener('load', loadImg);

function loadImg() {

  const url = "https://api.unsplash.com/search/photos?query=cat&per_page=20&client_id=gK52De2Tm_dL5o1IXKa9FROBAJ-LIYqR41xBdlg3X2k";

    const imageDiv = document.getElementById('image');

    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log("res",data);

                for (let i = 0; i < data.results.length; i++) {
                    // console.log(data.results[i].urls.small);
                    /* Fetch only image that you want by using id. Example : https://unsplash.com/photos/6VhPY27jdps, id = '6VhPY27jdps'   */
                        let imageElement = document.createElement('img');
                        imageElement.src = data.results[i].urls.small;
                        imageDiv.appendChild(imageElement);
                }
            });
}

const searchButton = document.getElementById('submit');
searchButton.addEventListener('click', searchImage);
 
function searchImage() {
    const searchValue = document.getElementById('search').value;  //india

    const url = `https://api.unsplash.com/search/photos?query=${searchValue}&per_page=20&client_id=gK52De2Tm_dL5o1IXKa9FROBAJ-LIYqR41xBdlg3X2k`;
    const imageDiv = document.getElementById('image');
    imageDiv.innerHTML = '';
    
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
               
                for (let i = 0; i < data.results.length; i++) {
                    console.log(data.results[i].urls.small);
                    /* Fetch only image that you want by using id. Example : https://unsplash.com/photos/6VhPY27jdps, id = '6VhPY27jdps'   */
                        let imageElement = document.createElement('img');
                        imageElement.src = data.results[i].urls.small;
                        imageDiv.appendChild(imageElement);
                }
            });
}