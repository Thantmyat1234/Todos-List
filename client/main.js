const API_URL = `https://api-proxy-server.herokuapp.com/video`;
const filterInput = document.querySelector("#filter");
const videosList = document.querySelector('#videos');
let videos = [];

const getVideo = async () => {
    try {
        const response = await fetch(API_URL);
        videos = await response.json();
        if(videos) {
            renderItems(videos);
        }
    } catch (error) {
        console.log(error);
    }
}

const filterList = (event) => {
    videosList.innerHTML = "";
    const keyword = event.target.value;
    const filtered = videos.filter(video => video.snippet.title.toLowerCase().includes(keyword.toLowerCase()));
    renderItems(filtered);
}

const renderItems = (items) => {
    items.forEach((video) => {
        const id = video.id;
        const url = video.snippet.thumbnails.high.url || 
                    video.snippet.thumbnails.medium.url  || 
                    video.snippet.thumbnails.default.url;
        const title = video.snippet.title;
        const description = video.snippet.description;
        const link = `https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`;
        const card = `
        <div class="col-md-4 col-sm-6" id=${id}>
            <div class="card">
                <img class="card-img-top" src=${url} alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">${description}</p>
                    <a href=${link} class="btn btn-primary" target="_blank"><i class="fas fa-eye"></i> Watch</a>
                </div>
            </div>
        </div>
        `;
        videosList.innerHTML += card;
    });
}

getVideo();
filterInput.addEventListener('keyup', filterList);
