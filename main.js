
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
   */   
  
   /*-When we use Asynchronous functions, we should work with Try and catch to also be able to catch an error in the request.*/ 
   try{

      const respuesta = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=be712d905546d6908c79fab28d8f4180&language=es-GT');
      console.log(respuesta);


      /*We need to perform a check of the response code that we have, and we do it using an if, else if, else statement to add a message according to the response status.*/ 
      if(respuesta.status === 200){
        /*-We use the json() method to be able to access the information that is also asynchronous and therefore we have to add AWAIT .*/ 
        const datos = await respuesta.json();

        /*A forEach is created to iterate through the Array that we are requesting.*/ 
        let peliculas ='';
        datos.results.forEach(pelicula=>{
          peliculas += `
          <div class="pelicula">
            <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" alt="">
            <h3>${pelicula.title}</h3>
          </div>
          
          `
        });

        document.getElementById('container').innerHTML = peliculas;


      }else if(respuesta.status===401){
        console.log('Se agrego la llave mal');
      }else if(respuesta.status===404){
        console.log('La pelicula que buscas no Existe');
      }else{
        console.log('Hubo un error y no sabemos que paso');
      }


   }catch(error){

      console.log(error)
   }



   
}

cargarPeliculas();

