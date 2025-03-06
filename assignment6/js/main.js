/*

HTML for the project.

<div class="col">
  <div class="card h-100">
    <img src="IMAGE LINK HERE" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">TITLE HERE</h5>
      <p class="card-text">
        ARTIST NAME HERE
      </p>
      <a href="WIKI DATA URL HERE" class="wiki-data-btn btn btn-outline-primary" target="_blank">Learn More</a>
    </div>
    <div class="card-footer">
      <small class="text-body-secondary">Time period: TIME PERIOD HERE</small>
    </div>
  </div>
</div>
*/

const museumObjectIds = [435809, 436532, 436947]
const elemGallery = document.querySelector(".museum-gallery");

// Your code here.

// Get each museum object by ID
// and create the gallery for them
const getMuseumObjectsData = () => {
  const url = "https://collectionapi.metmuseum.org/public/collection/v1/objects";

  elemGallery.innerHTML = "";
  museumObjectIds.forEach((id) => {
    fetch(`${url}/${id}`)
        .then((res) => {
            console.log(res.status);
            res.json().then((data) => {
              console.log(data);
              let title = data["title"];
              let image = data["primaryImage"];
              let artistName = data["artistDisplayName"];
              let date = data["objectDate"];
              let wiki = data["artistWikidata_URL"];
              renderGalleryCard(title, image, artistName, date, wiki);
            })
        })
        .catch((error) => {
            console.log(`error is: ${error}`)
        })
  })
}

// Create a gallery for one museum object
const renderGalleryCard = (title, image, artistName, date, wikiDataUrl) => {
  let templateString = 
    `<div class="col">
      <div class="card h-100">
        <img src="${image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">
            ${artistName}
          </p>
          <a href="${wikiDataUrl}" class="wiki-data-btn btn btn-outline-primary" target="_blank">Learn More</a>
        </div>
        <div class="card-footer">
          <small class="text-body-secondary">Time period: ${date}</small>
        </div>
      </div>
    </div>`;
    elemGallery.innerHTML += templateString;
}

// Call this function when page is loading
getMuseumObjectsData();