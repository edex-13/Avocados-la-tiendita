import getData from './utils/getData.js';

getData()
    .then((data)=>{
        console.log(data)
    })
    .catch((error)=>{
        console.log(error)
    })