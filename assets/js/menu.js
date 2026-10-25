document.addEventListener('DOMContentLoaded', () => {
    const menuContainer = document.getElementById('menu-container');

    // Cargar el JSON
    fetch('data/menu.json')
        .then(response => response.json())
        .then(data => {
            data.categorias.forEach(categoria => {
                // Crear columna de categoría
                const categoryDiv = document.createElement('div');
                categoryDiv.classList.add('menu-category');
                
                // Título de categoría
                const title = document.createElement('h3');
                title.textContent = categoria.nombre;
                categoryDiv.appendChild(title);

                // Iterar platillos
                categoria.platillos.forEach(platillo => {
                    const itemDiv = document.createElement('div');
                    itemDiv.classList.add('menu-item');
                    
                    // HTML interno del platillo
                    itemDiv.innerHTML = `
                        <div>
                            <strong>${platillo.nombre}</strong>
                            ${platillo.descripcion ? `<span class="desc">${platillo.descripcion}</span>` : ''}
                        </div>
                        <span>${platillo.precio ? platillo.precio : ''}</span>
                    `;
                    categoryDiv.appendChild(itemDiv);
                });

                menuContainer.appendChild(categoryDiv);
            });
        })
        .catch(error => {
            console.error('Error cargando el menú:', error);
            menuContainer.innerHTML = '<p>Error al cargar el menú. Por favor contáctanos por WhatsApp.</p>';
        });
});