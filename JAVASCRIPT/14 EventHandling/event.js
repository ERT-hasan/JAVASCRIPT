console.log('event');

let clickhandler = () =>{
    console.log('button clicked');
}

let buttonclickhandler = () =>{
    for(let i =0; i<10; i++){
        console.log(i);
    }
    
}

let button=document.getElementById('md');
//  using onclick

// button.onclick = buttonclickhandler;
// button.onclick = clickhandler;
// const button =document.getElementById('md');
// function handleclick(){
//     alert('button clicked');
// }
// //  attach event handler
// button.onclick = handleclick;


//  using event listner
button.addEventListener('click',clickhandler);
button.addEventListener('click', buttonclickhandler);
// button.removeEventListener('click',clickhandler);