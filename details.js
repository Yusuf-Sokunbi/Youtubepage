document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('videoLink');
    const title = urlParams.get('title');
    const views = urlParams.get('views');
    const urlImage = urlParams.get('image');
    const urlVideo = urlParams.get('video');
    document.getElementById('video-link').innerText = name;
    document.getElementById('item-title').innerText = title;
    document.getElementById('item-views').innerText = views;
    const videos = document.createElement('iframe');
//   const movie = document.getElementById('item-video');
  const src = document.getElementById("iframe");
    iframe.src = urlVideo
    src.appendChild(iframe);
    const img = document.createElement("img");
   
    img.src = urlImage;
    src.appendChild(img);
    console.log(urlParams)

});