/* Part 2 */
console.log('PART 2');
for (let i = 1; i < 21; i++) {
    console.log(i);
}

/* Part 3 */
console.log('PART 3');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0) {
        console.log('eple');
    } else if (numbers[i] % 5 === 0) {
        console.log('kake');
    } else {
        console.log(numbers[i]);
    }
}

/* Part 4 */
document.getElementById('title').innerText = 'Hello, Javascript';

/* Part 5 */
function changeDisplay () {
    document.getElementById('magic').style.display = 'none';
}

function changeVisibility () {
    const magicDiv = document.getElementById('magic');
    magicDiv.style.display = 'block';
    magicDiv.style.visibility = 'hidden';
}

function reset () {
    const magicDiv = document.getElementById('magic');
    magicDiv.style.display = 'block';
    magicDiv.style.visibility = 'visible';
}

/* Part 6 */
const technologies = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'Python',
    'Java',
    'AJAX',
    'JSON',
    'React',
    'Angular',
    'Bootstrap',
    'Node.js'
];

const unorderedList = document.getElementById('tech');
let li;
technologies.forEach(element => {
    li = document.createElement('li');
    li.innerText = element;
    unorderedList.appendChild(li);
})