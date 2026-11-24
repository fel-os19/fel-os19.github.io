//envío del formulario mediante el endpoint público de formspree
const form = document.querySelector('#contact-form');
if (form && /^https:\/\/formspree\.io\/f\/[a-zA-Z0-9]+$/.test(form.action)) {
  const button = form.querySelector('button[type=submit]');
  const status = document.querySelector('#contact-status');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (button.disabled) return;
    button.disabled = true;
    delete status.dataset.state;
    status.textContent = form.dataset.sending;
    try {
      const response = await fetch(form.action, {method:'POST', body:new FormData(form), headers:{Accept:'application/json'}});
      if (!response.ok) throw new Error('submission failed');
      form.reset();
      status.textContent = form.dataset.ok;
      status.dataset.state = 'success';
    } catch {
      status.textContent = form.dataset.error;
      status.dataset.state = 'error';
    } finally { button.disabled = false; }
  });
}
