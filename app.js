
window.addEventListener('DOMContentLoaded', () => {
    let searchButton = document.getElementById('search-button');
    let searchInput = document.getElementById('query');
    
    searchButton.addEventListener('click', (event) => {
        event.preventDefault();
        
        let query = searchInput.value.trim();
        let url = 'superheroes.php';
        
        if (query) {
            url += '?query=' + encodeURIComponent(query);
        }
        
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                let results = document.getElementById('results');
                results.innerHTML = data;
            })
            .catch(error => {
                console.error("Error loading PHP content: ", error);
                let results = document.getElementById('results');
                results.innerHTML = '<p>Error loading superhero data.</p>';
            }); 
    });
});