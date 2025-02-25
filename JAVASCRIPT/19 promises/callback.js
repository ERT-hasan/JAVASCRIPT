console.log('checking callback hel');

function getDataFromInternet(successCallback){
    console.log('getting data from internet');
    setTimeout(() =>{
        console.log('got data from internet');

        successCallback();
    }, 1000);
    console.log('data fetch is set');
    console.log('data fetch is set');
    console.log('data fetch is set');

}
getDataFromInternet(()=>{
    console.log('data is fetched');
});