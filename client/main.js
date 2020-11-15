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
        
        const col = document.createElement('div');
        const card = document.createElement('div');
        const img = document.createElement('img');
        const cardBody = document.createElement('div');
        const h5 = document.createElement('h5');
        const p = document.createElement('p');
        const a = document.createElement('a');

        col.setAttribute('class', 'col-md-4 col-sm-6');
        col.setAttribute('id', id);
        card.setAttribute('class', 'card');
        img.setAttribute('class', 'card-img-top');
        img.setAttribute('src', url);
        img.setAttribute('alt', 'card image cap');
        cardBody.setAttribute('class', 'card-body');
        h5.setAttribute('class', 'card-title');
        h5.textContent = title;
        p.setAttribute('class', 'card-text');
        p.textContent = description;
        a.setAttribute('class', 'btn btn-primary');
        a.href = link;
        a.setAttribute('target', '_blank');
        a.innerHTML = '<i class="fas fa-eye"></i> Watch</a>';

        cardBody.append(h5, p, a);
        card.append(img, cardBody);
        col.appendChild(card);

        videosList.appendChild(col);
    });
}

getVideo();
filterInput.addEventListener('keyup', filterList);
