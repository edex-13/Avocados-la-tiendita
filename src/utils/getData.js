const API = 'https://platzi-avo.vercel.app/api/avo';

const getData = async () => {
   try {
      const response = await fetch(API);
      const data = await response.json();
      return data;
   } catch (error) {
      return error
   }
};
export default getData;
