
window.addEventListener('DOMContentLoaded', () => {
    let searchButton = document.getElementById('search-button');
    searchButton.addEventListener('click', () => {
        fetch('superheroes.php')
            .then(response => response.text())
            .then(data => {
                // let heroSection = document.getElementById('supers-section');
                // heroSection.innerHTML = data;
                alert(data);
                console.log(data);
            })
            .catch(error => {
                console.error("Error loading PHP content: ", error);
            }); 
    });
});
