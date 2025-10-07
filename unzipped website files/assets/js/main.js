
function toggleMenu(){
  const m = document.getElementById('mainMenu');
  m.classList.toggle('open');
}
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form[name="quote"]');
  if(form){
    form.addEventListener('submit', (e)=>{
      const email = form.querySelector('input[name="email"]');
      if(email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)){
        e.preventDefault();
        alert('Please enter a valid email.');
        email.focus();
      }
    });
  }
});
