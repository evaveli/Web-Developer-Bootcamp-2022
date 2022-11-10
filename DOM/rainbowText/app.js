const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:
const spans = document.querySelectorAll('span');

// let i =0;
// for(let span of spans){
//         span.style.color=colors[i] ;
//         i++;

// }

for(let i=0 ; i<colors.length ; i++) {
    spans[i].style.color=colors[i];
}

// spans.forEach(function (span, index) {
//     span.style.color = colors[index];

// });
