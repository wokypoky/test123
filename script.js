'use strict';
let question = confirm('Hello?');

console.log(question);
let yes = document.querySelector('.yes');
if (question) {
    yes.innerHTML = 'yes';
} else if (!question) {
    yes.innerHTML = 'not';
}
var srcPictures = [
    '3.png',
    '567.png',
    'lolo.png',
];
var pictures = document.querySelectorAll('.littlePicture');
var bigPicture = document.querySelector('.bigPicture');
var enterImg = function(picture, link) {
picture.addEventListener('click', function() {
    bigPicture.src = link;
});
};
for (var i = 0; i < pictures.length; i++) {
    enterImg(pictures[i], srcPictures[i]);
}