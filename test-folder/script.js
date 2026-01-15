
fetchData = async () => {
    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if(!response.ok) {
            throw new Error("Could not fetch resource");
        }
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imageEl = document.getElementById("pokemonSprite");

        imageEl.src = pokemonSprite;
        imageEl.style.display = "block";
    } catch(error) {
        console.error("Error:", error.message);
    }
}

fetchData();
