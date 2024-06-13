async function fetchData(){
    try {

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    
        if(!response.ok) {
            throw new Error("doesn't exist");
        }
    
        const data = await response.json();
        console.log(data);
        const pokemonSprite = data.sprites.front_default;
        
        console.log(pokemonSprite);
        
        const imgElement = document.getElementById('pokemonSprite');
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";

        //why does the dom method clear and the pokemonName does not, because that value isn't the pokemon
        //name, the pokemon name gets created from that value

        document.getElementById("pokemonName").value = "";


    } catch(error) {
        console.error(error);
    }
}

fetchData();


    