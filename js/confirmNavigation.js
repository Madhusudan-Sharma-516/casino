window.addEventListener('beforeunload', (event) => {
  // Customize the message to be displayed
  const confirmationMessage = 'Are you sure you want to leave? you will lose your money.';

  // For modern browsers, setting event.returnValue is enough
  event.returnValue = confirmationMessage;

  // For older browsers
  return confirmationMessage;
});