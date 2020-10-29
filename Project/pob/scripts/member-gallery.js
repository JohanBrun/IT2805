members = [
  {
    name: "Nasse",
    group: "conductor",
    info: "Info placeholder",
    imageSrc: "./images/portraits/nasse.jpg"
  },
  {
    name: "Hallvard",
    group: "tenor1",
    info: "Info placeholder",
    imageSrc: "./images/portraits/brun.jpg"
  },
  {
    name: "Bård",
    group: "tenor1",
    info: "Info placeholder",
    imageSrc: "./images/portraits/brun.jpg"
  },
  {
    name: "David",
    group: "tenor1",
    info: "Info placeholder",
    imageSrc: "./images/portraits/brun.jpg"
  },
  {
    name: "Jack",
    group: "tenor1",
    info: "Info placeholder",
    imageSrc: "./images/portraits/brun.jpg"
  },
  {
    name: "Folke",
    group: "tenor1",
    info: "Info placeholder",
    imageSrc: "./images/portraits/brun.jpg"
  },
  {
    name: "Marius",
    group: "tenor1",
    info: "Info placeholder",
    imageSrc: "./images/portraits/brun.jpg"
  },
  {
    name: "Martin",
    group: "tenor1",
    info: "Info placeholder",
    imageSrc: "./images/portraits/brun.jpg"
  },
  {
    name: "Helge",
    group: "tenor1",
    info: "Info placeholder",
    imageSrc: "./images/portraits/brun.jpg"
  },
  {
    name: "Olve",
    group: "tenor2",
    info: "Info placeholder",
    imageSrc: "./images/portraits/brun.jpg"
  },
  {
    name: "Bjørn",
    group: "tenor2",
    info: "Info placeholder",
    imageSrc: "./images/portraits/brun.jpg"
  },
  {
    name: "Håkon",
    group: "tenor2",
    info: "Info placeholder",
    imageSrc: "./images/portraits/brun.jpg"
  },
  {
    name: "Florian",
    group: "tenor2",
    info: "Info placeholder",
    imageSrc: "./images/portraits/brun.jpg"
  },
  {
    name: "Olav",
    group: "tenor2",
    info: "Info placeholder",
    imageSrc: "./images/portraits/brun.jpg"
  },
  {
    name: "Fartein",
    group: "tenor2",
    info: "Info placeholder",
    imageSrc: "./images/portraits/brun.jpg"
  },
  {
    name: "Sverre",
    group: "bass1",
    info: "Info placeholder",
    imageSrc: "./images/portraits/brun.jpg"
  },
  {
    name: "Aleksander",
    group: "bass1",
    info: "Info placeholder",
    imageSrc: "./images/portraits/brun.jpg"
  },
  {
    name: "Eilif",
    group: "bass1",
    info: "Info placeholder",
    imageSrc: "./images/portraits/brun.jpg"
  },
  {
    name: "Ole Tobias",
    group: "bass1",
    info: "Info placeholder",
    imageSrc: "./images/portraits/brun.jpg"
  },
  {
    name: "Tobias",
    group: "bass1",
    info: "Info placeholder",
    imageSrc: "./images/portraits/brun.jpg"
  },
  {
    name: "Erik",
    group: "bass2",
    info: "Info placeholder",
    imageSrc: "./images/portraits/brun.jpg"
  },
  {
    name: "Edvin",
    group: "bass2",
    info: "Info placeholder",
    imageSrc: "./images/portraits/brun.jpg"
  },
  {
    name: "Gaute",
    group: "bass2",
    info: "Info placeholder",
    imageSrc: "./images/portraits/brun.jpg"
  },
  {
    name: "Markus",
    group: "bass2",
    info: "Info placeholder",
    imageSrc: "./images/portraits/brun.jpg"
  },
  {
    name: "Per Eigil",
    group: "bass2",
    info: "Info placeholder",
    imageSrc: "./images/portraits/brun.jpg"
  },
  {
    name: "Johan",
    group: "bass2",
    info: "Info placeholder",
    imageSrc: "./images/portraits/brun.jpg"
  },
];

let group;
let container;
let img;
let title;
let info;
members.forEach(member => {
  group = document.getElementById(member.group);

  container = document.createElement('div');
  container.setAttribute('style', 'height: 100%; width: 150px');

  title = document.createElement('h4');
  title.setAttribute('class', 'member-name');
  title.innerText = member.name;

  img = document.createElement('img');
  img.setAttribute('src', member.imageSrc);
  img.setAttribute('class', 'portrait');

  info = document.createElement('p');
  info.innerText = member.info;
  
  container.appendChild(title);
  container.appendChild(img);
  container.appendChild(info);
  group.appendChild(container);
})