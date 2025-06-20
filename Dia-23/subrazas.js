// subrazas.js
export async function obtenerSubrazas(raza) {
    const res = await fetch(`https://dog.ceo/api/breed/${raza}/list`);
    const data = await res.json();
    return data.message; // array de subrazas
    
  }