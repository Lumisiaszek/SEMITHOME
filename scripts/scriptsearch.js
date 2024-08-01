document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario
  
    filterList();
});

document.getElementById('searchInput').addEventListener('input', function() {
    filterList();
});

function filterList() {
    var searchInput = document.getElementById('searchInput').value.toLowerCase();
    var medicos = document.querySelectorAll('.lista_med .medico');
    
    // Normalizar el texto de búsqueda
    searchInput = normalizeText(searchInput);
    
    if (searchInput) {
        medicos.forEach(function(medico) {
            var tit_med = normalizeText(medico.querySelector('.tit_med').textContent.toLowerCase());
            var ub_med = normalizeText(medico.querySelector('.ub_med').textContent.toLowerCase());
            var ub_zona = normalizeText(medico.querySelector('.ub_zona').textContent.toLowerCase());

            // Mostrar el médico si alguna de las partes coincide
            if (tit_med.indexOf(searchInput) !== -1 || ub_med.indexOf(searchInput) !== -1 || ub_zona.indexOf(searchInput) !== -1) {
                medico.classList.remove('hidden');
            } else {
                medico.classList.add('hidden');
            }
        });
    } else {
        // Mostrar todos los médicos si no hay texto de búsqueda
        medicos.forEach(function(medico) {
            medico.classList.remove('hidden');
        });
    }
}

function normalizeText(text) {
    // Reemplaza caracteres acentuados por sus equivalentes sin acento
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}