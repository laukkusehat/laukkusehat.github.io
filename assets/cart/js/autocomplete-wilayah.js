document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('autocomplete');
    const suggestionsContainer = document.getElementById('autocomplete-list');

    // Fetch JSON data
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const items = data.map(item => item.name);

            // Add event listener for the input field
            input.addEventListener('input', () => {
                const query = input.value.toLowerCase();
                suggestionsContainer.innerHTML = '';

                if (query.length === 0) {
                    return;
                }

                const filteredItems = items.filter(item => item.toLowerCase().includes(query));

                filteredItems.forEach(item => {
                    const suggestionItem = document.createElement('div');
                    suggestionItem.classList.add('autocomplete-suggestion');
                    suggestionItem.textContent = item;
                    suggestionsContainer.appendChild(suggestionItem);

                    suggestionItem.addEventListener('click', () => {
                        input.value = item;
                        suggestionsContainer.innerHTML = '';
                    });
                });
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
