export default async function poke( id ) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    // console.log(res)
    return res.json();
}