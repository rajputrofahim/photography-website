<script>
// JavaScript for Lightbox (Image Modal)
let images = document.querySelectorAll('.gallery-item img');
let modal = document.createElement('div');
modal.classList.add('modal');
document.body.appendChild(modal);

images.forEach(image => {
    image.addEventListener('click', () => {
        modal.style.display = 'block';
        let img = document.createElement('img');
        img.src = image.src;
        modal.innerHTML = '';
        modal.appendChild(img);
    });
});

modal.addEventListener('click', () => {
    modal.style.display = 'none';
});
</script>
