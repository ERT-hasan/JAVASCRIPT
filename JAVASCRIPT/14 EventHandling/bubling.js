const outer= document.querySelector('.outer');
const inner = document.querySelector('.inner');


// outer.addEventListener('click', () =>{
//     console.log('outer');
// });

// inner.addEventListener('click', () =>{
//     console.log('inner');
// });

//  stoppropagation
outer.addEventListener('click', () =>{
    console.log('outer');
});

inner.addEventListener('click', (event) =>{
    console.log('inner');
    // event.stopPropagation();
});

// capturing propagate

// outer.addEventListener('click', () =>{
//     console.log('outer');
// },true);

// inner.addEventListener('click', (event) =>{
//     console.log('inner');
//     event.stopPropagation();
// });