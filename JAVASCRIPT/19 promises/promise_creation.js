// function getDataFromInternet(successCallback){
//     console.log('getting data from internet');
//     successCallback('kg coding');

// }
// getDataFromInternet((data) =>{
//  console.log(`data fetch is ${data}`);
// });

function getDataFromInternetUsingPromise() {
    let promise = new Promise((resolve, reject) => { 
        console.log('Getting data from the internet using Promise...');
        resolve('kg coding');
       // reject('Internet timeout');
    });
    return promise;
}

getDataFromInternetUsingPromise()
    .then((data) => {
        console.log(`Data fetched is: ${data}`);
    })
    .catch((error) => {
        console.error(`Error: ${error}`);
    })
    .finally(() =>{
        console.log('finally block');
    })










