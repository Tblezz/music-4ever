 let previous = document.querySelector('#pre');
 let play = document.querySelector('#play');
  let next = document.querySelector('#next');
 let title = document.querySelector('#title');
 let recent_volume = document.querySelector('#volume');
 let volume_show = document.querySelector('#volume_show');
 let slider = document.querySelector('#duration_slider');
 let show_duration = document.querySelector('#show_duration');
 let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');


let timer;
let autoplay = 0;

let index_no = 0;
let playing_song = false;

//create a audio Element
let track = document.createElement('audio');

//All songs list
let All_song = [
{
	name: "Love_yourself",
	path: "music/song1.mp3",
	img: "img/img1.jpg",
	singer: "Justin Bieber"
},
{
	name: "Thank God",
	path: "music/song2.mp3",
	img: "img/img2.jpg",
	singer: "Riles"
},
{
	name: "Memories",
	path: "music/song3.mp3",
	img: "img/img3.jpg",
	singer: "Maroon 5"
},
{
	name: "can we kiss forever",
	path: "music/song4.mp3",
	img: "img/img4.jpg",
	singer: "Kina ft Andriano"
},
{
	name: "Pillowtalk",
	path: "music/song5.mp3",
	img: "img/img5.jpg",
	singer: "Zayn"
}
];

//All function

//function load the track
function load_track(index_no){
	track.src = All_song[index_no].path;
	title.innerHTML = All_song[index_no].name;
	track_image.src = All_song[index_no].img;
	artist.innerHTML = All_song[index_no].singer;
	track.load();
}
load_track(index_no);