(() => {

  function getMovieById( movieId: string ) {
    console.log({ movieId });
  }

  // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
  function getMovieCast( id: string ) {
    console.log({ id });
  }

  // funcion para obtener el bio del actor por el id
  function getActorBioById( ActorId: string ) {
    console.log({ ActorId });
  }
  
  interface Movie {
    title: string, 
    description: string, 
    rating: number, 
    cast: string[] 
  }
  // Crear una película
  function createMovie({ title, description, rating, cast } : Movie ) {
    console.log({ title, description, rating, cast });
  }
  
  // Crea un nuevo actor
  // La funcion debe de tener una unica responsabilidad por ese motivo creamos una función aparte para verificar el nombre
  function checkFullName( fullName: string ) {
    console.log({ fullName })
    return true
  }
  function createActor( fullName: string, birthdate: Date ): boolean {
    
    // tarea asincrona para verificar nombre
    // ..
    // ..
    if ( checkFullName(fullName)) return false;

    console.log('Crear actor', birthdate);
    return true;        
  }

  // Segunda parte
  const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {
    if (isDead) return 1500;

    if (isSeparated) return 2500;
    
    return isRetired ? 3000 : 4000;
  }
})();