
links = [
  {
    title: 'Hjem',
    href: 'home.html'
  },
  {
    title: 'Historie',
    href: 'history.html'
  },
  {
    title: 'Medlemmer',
    href: 'members.html'
  },
  {
    title: 'Galleri',
    href: 'gallery.html'
  },
  {
    title: 'Booking',
    href: 'booking.html'
  },
];

const nav = document.getElementById('navbar');
const ul = document.createElement('ul');
ul.setAttribute('class', 'link-list');
let li;
let a;
let h1;
links.forEach(link => {
  li = document.createElement('li');
  a = document.createElement('a');
  a.setAttribute('href', link.href);
  h1 = document.createElement('h1');
  h1.setAttribute('class', 'link-title');
  h1.innerText = link.title;

  const url = window.location.href;
  let index = url.lastIndexOf('/');
  if (link.href === url.slice(index +1)) {
    li.setAttribute('class', 'active');
  }
  
  a.appendChild(h1);
  li.appendChild(a);
  ul.appendChild(li);
});
nav.appendChild(ul);

