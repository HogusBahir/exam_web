
$(function() {
 
    //Write your code below
    (async function planets(){
        const response = await fetch("data/planets.json");
        const planets = await response.json();

        for (planets)
    })();

});
