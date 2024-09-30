function includeHTML() {
    const elements = document.querySelectorAll('[data-include]');
    
    elements.forEach(function(el) {
        const file = el.getAttribute('data-include');
        
        if (file) {
            fetch(file)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.text();
                })
                .then(data => {
                    el.innerHTML = data;
                })
                .catch(error => {
                    console.error('Error loading file:', file, error);
                });
        }
    });
}

// Appeler la fonction après que le DOM a chargé complètement
document.addEventListener("DOMContentLoaded", includeHTML);
