// Event listener for save button (on click)
document.getElementById('saveButton').addEventListener('click', () => {
    const userPreference = document.getElementById('preferenceInput').value; // Get input value
    saveData('exampleKey', userPreference); // Call the save function
  });