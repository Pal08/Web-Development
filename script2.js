const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });
 
document.querySelectorAll('.rv').forEach(el => observer.observe(el));
 
/* ── BACK BUTTON ── */
function goBack(e) {
  e.preventDefault();
  sessionStorage.setItem('scrollTo', 'fablab');
  window.location.href = 'index.html';
}
 