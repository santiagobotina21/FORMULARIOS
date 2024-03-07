

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const inputs = document.querySelectorAll('input[type="number"]');

checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        const index = checkbox.dataset.index;
        const relatedInput = document.querySelector(`#input${index}`);
        
        if (checkbox.checked) {
            relatedInput.classList.remove('hidden');
        } else {
            relatedInput.classList.add('hidden');
        }
    });
});

const mostrarlista = document.getElementById('mostrar-lista');
const miLista = document.getElementById('mi-lista');

// Agregar un evento de clic al enlace
mostrarlista.addEventListener('click', function(event) {
    event.preventDefault();
    miLista.style.display = 'block';  
});