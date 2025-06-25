document.querySelectorAll('.gallery-thumb').forEach(link => {
link.addEventListener('click', function(e) {
    e.preventDefault();
    const images = JSON.parse(this.getAttribute('data-images'));
    const title = this.getAttribute('data-title') || 'Galerie';
    const carouselInner = document.getElementById('galleryCarouselInner');
    carouselInner.innerHTML = '';

    images.forEach((src, index) => {
    const img = document.createElement('img');
    img.src = src;
    img.className = 'd-block w-100';
    img.alt = title;

    const item = document.createElement('div');
    item.className = 'carousel-item' + (index === 0 ? ' active' : '');
    item.appendChild(img);
    carouselInner.appendChild(item);
    });

    document.getElementById('galleryTitle').textContent = title;
    new bootstrap.Modal(document.getElementById('galleryModal')).show();
});
});
