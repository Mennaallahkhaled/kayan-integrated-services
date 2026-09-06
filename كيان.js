<script>
const slider = document.querySelectorAll('.slider img');
let current = 0;

function showSlide(index) {
  slider.forEach((img, i) => {
    img.classList.remove('active');
    if (i === index) {
      img.classList.add('active');
    }
  })
}

function nextSlide() {
  current = (current + 1) % slider.length;
  showSlide(current);
  }

function prevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
}
</script>