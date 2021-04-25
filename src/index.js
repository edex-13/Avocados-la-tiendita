import getData from './utils/getData.js';

const container = document.querySelector('.container');
getData()
   .then((data) => {
      showData(data);
   })
   .catch((error) => {
      console.log(error);
   });

function showData({data}) {
   const elements = createElements(data);
   container.append(...elements);
}
function createElements(data) {
   let allElements = [];
   data.forEach(({name, price, image}) => {
      const elementName = document.createElement('h2');
      elementName.textContent = name;
      elementName.classList.add('item__title')

      const elementPrice = document.createElement('section');
      elementPrice.textContent = fromatPrice(price);

      const elementImage = document.createElement('img');
      let routeImage = `https://platzi-avo.vercel.app/${image}`;
      elementImage.src = routeImage;
      elementImage.classList.add('item__image')

      const containerDetails = document.createElement('div');
      containerDetails.classList.add('item__Details')
      containerDetails.append(elementName, elementPrice);

      const containerItem = document.createElement('div');
      containerItem.classList.add('containerItem')
      containerItem.append(elementImage, containerDetails);

      allElements.push(containerItem);
   });
   return allElements;
}

const fromatPrice = (price)=>{
   const newPrice = new  window.Intl.NumberFormat("en-En" , {
      style: "currency",
      currency: "USD"
   }).format(price)
   return newPrice
}