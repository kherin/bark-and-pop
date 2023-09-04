document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#submitForm').addEventListener('click', () => {
    const toastSuccess = document.querySelector('#toastSuccess');
    const toastFailure = document.querySelector('#toastFailure');

    // capture data
    const nameValue = document.querySelector('#name').value;
    const emailValue = document.querySelector('#email').value;
    const addressValue = document.querySelector('#address').value;

    // send data
    fetch('/form/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: nameValue,
        email: emailValue,
        address: addressValue,
      }),
    })
      .then((res) => {
        // Show the toast
        toastSuccess.style.display = 'block';
      })
      .catch((err) => {
        toastFailure.style.display = 'block';
        console.log('Failed to submit form via fetch. Failure: ', err);
      })
      .finally(() => {
        // Hide the toast after a delay (e.g., 3 seconds)
        setTimeout(() => {
          toastSuccess.style.display = 'none';
          toastFailure.style.display = 'none';
        }, 3000);

        // reset values
        document.querySelector('#contactForm').reset();
      });
  });
});
