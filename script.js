function showStudentInfo() {
  const userId = document.getElementById('userId').value;

  // Assuming that each student has a separate HTML file with their user ID as the filename
  const studentPageUrl = `user/${userId}.html`;
  window.location.href = studentPageUrl;
}

function updateStatus(action) {
  console.log('Status updated:', action);
  // Implement logic to update the status here
  // This function can be customized to update the student's status as needed
}
