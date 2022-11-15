// WRITE YOUR CODE IN HERE:

const div = document.querySelector('#container');

for (let i = 0; i < 100; i++) {
    const button = document.createElement('button');
    button.innerText = 'Hey!';
    div.appendChild(button);
}