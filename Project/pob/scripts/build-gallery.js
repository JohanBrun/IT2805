
numPhotosUKA19 = 25;

const UKA19 = document.getElementById('UKA-19');
const photoContainer = document.createElement('div');
photoContainer.setAttribute('class', 'collapsable-gallery');

showFullscale = (img) => {
  console.log('image clicked');
  bigImg = new Image();
  console.log(img)
  /*
  bigImg.src = url;
  bigImg.class = 'fullscale-img';
  document.getElementById('gallery-content').appendChild(bigImg);
  */
}

let img;
for (i = 1; i <= numPhotosUKA19; i++) {
  img = new Image();
  img.src = 'images/UKA-19-comp/UKA-19-' + i + '.jpg';
  img.addEventListener('click', () => { showFullscale(img) });
  img.alt = 'foto.samfundet.no';
  photoContainer.appendChild(img);
}

UKA19.appendChild(photoContainer);
