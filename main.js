import { array } from "./backup.js";


const carts= array.videos;
// cart.map((item) => {
//   console.log(item)
// });

// let shortVideo = carts.filter(cart => cart.author === "A4")
//  console.log(shortVideo);
let firstArray = carts.slice(0,25);
let secondArray = carts.slice(25, 50);
let thirdArray = carts.slice(50, 74);
let forthArray = carts.slice(74, 100);
 let bodyImage =carts.slice(2, 3)
 let outputHTML = "";
 let outputHTML1 ="";
 let outputHTML2 ="";
 let outputHTML3 ="";
 let outputHTML4 ="";


 
function slide() {
  const productContainers = [...document.querySelectorAll('.container')];
  const preBtn = [...document.querySelectorAll('.prev-arrow')];
  const nxtBtn = [...document.querySelectorAll('.next-arrow')];
 
  productContainers.forEach((item, i) => {
   let containerDimensions = item.getBoundingClientRect();
   let containerWidth = containerDimensions.width;
 
   nxtBtn[i].addEventListener('click', () => {
     item.scrollLeft += containerWidth
   });
   preBtn[i].addEventListener('click', () => {
     item.scrollLeft -= containerWidth
   })
  })
 }
  
  bodyImage.forEach((photo) => {
    const image = photo.thumbnails[2].url;
    const video =`https://www.youtube.com/embed/${photo.video_id}`;
    console.log(image);
    outputHTML += `<div style="background-image:url(${image})" class="h-1/2 w-full bg-cover mt-0"> <header class="navbar fixed">
      <div class="logo">
        <div class="play">
          <i class="fa fa-play"></i>
        </div>
      <h2 class="text text-white">Youtube Player</h2>
    </div>
    <div class="btn-search">
      <input class="search items-center justify-center" type="text" placeholder="search Name">
     <button id="button"><i class="fa fa-search mx-2"></i></button>
    </div>
    </header>

     <div class="flex justify-center items-center space-x-2 my-48">
     <div class="flex bg-green-700 py-4 px-2 border-red-900 w-8 h-8 rounded-full justify-center items-center ">
     <i class="fa fa-play"></i>
     </div>
     <div class="flex items-center space-x-1 text-2xl">
     <div>Watch Now</div>
     <div>WAR HANDS</div>
     </div>
     </div>
     </div>`
   })
   document.querySelector('.main').innerHTML = outputHTML;


 function trendingList() {
  // slide();
const trending = firstArray
trending.map((item) => {
  console.log(item)
  const image =item.thumbnails[2].url ;
  const title =item.title.length > 20?item.title.slice(0, 20) + "...." :item.title;
  const day =item.published_time;
  const view = (Math.round(item.number_of_views)/ 1000000).toFixed(2);
  const channel =item.channel_id;
  const author =item.author;
  const type =item.type;
  const videoLink =`https://www.youtube.com/embed/${item.video_id}`;
  const time =item.video_length;
  outputHTML1 += `<div class="card-item swiper-slide">
            <a class="link" href="details.html?title=${title}&image=${image}&video=${videoLink}" target="_blank">
                <img src="${image}" alt="images" class="user-image">
                <h4 class="title user-name">${title}</h4>
                <p class="view user-profession">${view}M</p>
            </a>
          </div>`;
 }).join("");
 document.querySelector(".container1").innerHTML = outputHTML1;
}
trendingList();

function movieList() {
  // slide();
const movies = secondArray
movies.map((movie) => {
  console.log(movie);
  const image = movie.thumbnails[2].url ;
  const title = movie.title.length > 20?movie.title.slice(0, 20) + "...." :movie.title;
  const day = movie.published_time;
  const view =(Math.round(movie.number_of_views)/1000000).toFixed(2);
  const channel = movie.channel_id;
  const author = movie.author;
  const type = movie.type;
  const videoLink = `https://www.youtube.com/embed/${movie.video_id}`;
  const time = movie.video_length;
  outputHTML2 += `<div class="card-item swiper-slide">
             <a class="link" href="details.html?title=${title}&image=${image}&video=${videoLink}" target="_blank">
             <img src="${image}" alt="images" class="user-image">
              <div class="title user-name">${title}</div>
              <p class="view user-profession">${view}M</p>
              </a>
            </div>`;
 })
 document.querySelector(".container2").innerHTML = outputHTML2;
}
movieList();

function mostHitVideo() {
  //  slide();
  const videos =  thirdArray
  videos.forEach((video) =>{
    console.log(video);
    const image =video.thumbnails[2].url ;
    const title =video.title.length > 20?video.title.slice(0, 20) + "...." :video.title;
    const day =video.published_time;
    const view =(Math.round(video.number_of_views)/1000000).toFixed(2);
    const channel =video.channel_id;
    const author =video.author;
    const type =video.type;
    const videoLink =`https://www.youtube.com/embed/${video.video_id}`;
    const time =video.video_length;

    outputHTML3 += `<div class="card-item swiper-slide">
            <a class="link" href="details.html?title=${title}&image=${image}&video=${videoLink}" target="_blank">
              <img src="${image}" alt="images" class="user-image">
                <div class="title user-name">${title}</div>
                <p class="view user-profession">${view}M</p>
                </a>
              </div>`;
   })
   document.querySelector(".container3").innerHTML = outputHTML3;
}
mostHitVideo();

function moreHit() {
  slide();
 const itemVideos = forthArray;
 itemVideos.forEach((more) =>{
  const image = more.thumbnails[2].url;
  const title = more.title.length > 10?more.title.slice(0, 10) + "...." :more.title;
  const day = more.published_time;
  const view = (Math.round(more.number_of_views)/1000000).toFixed(2);
  const channel = more.channel_id;
  const author = more.author;
  const type = more.type;
  const videoLink = `https://www.youtube.com/embed/${more.video_id}`;
  const time = more.video_length;
  outputHTML4 += `<div class="card-item swiper-slide">
            <a class="link" href="details.html?title=${title}&image=${image}&video=${videoLink}" target="_blank">  
              <img src="${image}" alt="images" class="user-image"></img>
              <div class="title user-name">${title}</div>
              <p class="view user-profession">${day}.</p>
            </a>
            </div>`;
 })
 document.querySelector(".container4").innerHTML = outputHTML4;
}
 moreHit();

 function moreVideo() {

 }

 document.querySelectorAll(".button").addEventListener("click", ()=> {
  console.log("My name is YUUSUF")
 })
// console.log(thirdArray);

// console.log(forthArray);