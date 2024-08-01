document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var tel = document.getElementById('tel').value;
    var perfil = document.getElementById('perfil').value; // Corrección del ID aquí
    var comentario = document.getElementById('comentario').value;

    if (name && email && tel && perfil && comentario) {
        // Para desarrollo local (solo muestra el modal y resetea el formulario)
        console.log(name, email, tel, perfil, comentario);
        showModal('.form__msj--enviado');
        document.getElementById('contactForm').reset();

        // Código para enviar al backend (descomentar y ajustar según sea necesario)
        /*
        fetch('BACKEND_ENDPOINT_URL', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: name, email: email, tel: tel, perfil: perfil, comentario: comentario })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                showModal('.form__msj--enviado');
                document.getElementById('contactForm').reset();
            } else {
                showModal('.form__msj--error');
            }
        })
        .catch(error => {
            showModal('.form__msj--error');
        });
        */
    } else {
        showModal('.form__msj--error');
    }
});

function showModal(selector) {
    var modal = document.querySelector(selector);
    modal.style.display = 'flex';

    var closeBtn = modal.querySelector('.close');
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    };

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}