
/*
 ** STEPS TO CONNECT AN API
*/


/*
  ** AN ARROW FEATURE IS CREATED
- will connect to the API 
- You will get the movies 
- will load them into our HTML code
*/ 
const cargarPeliculas= async() =>{
   /*
   -to connect to the API we use the FETCH function.
   -It is added in a variable to be the result of the request.
   -When we use the fetch function we return a promise.
   -The AWAIT operator is used to wait for a PROMISE and can only be used within an ASYNC function.
   -It verifies the parameters you need to be able to make the request.
   -When we use Asynchronous functions, we should work with Try and catch to also be able to catch an error in the request.
   -We use the json() method to be able to access the information that is also asynchronous and therefore we have to add AWAIT .
   */   
  
   try{
    const respuesta = await fetch('https://api.themoviedb.org/3/movie/550?api_key=be712d905546d6908c79fab28d8f4180&language=es-GT');
    console.log(respuesta);
    const datos = await respuesta.json();
    console.log(datos);
   }catch(error){
    console.log(error)
   }



   
}

cargarPeliculas();

