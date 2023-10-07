const students = {
  "5928000256": { name: "Max Weller", status: "Not updated" },
  "5928000268": { name: "Charlotte Collier", status: "Not updated" },
  "5928000267": { name: "Mason Collier", status: "Not updated" }
};

function showStudentInfo() {
  console.log('Submit button clicked!'); // Log a message to check if the function is called
  const userId = document.getElementById('userId').value;
  console.log('User ID:', userId); // Log the user ID to check if it's retrieved correctly
  const student = students[userId];

  if (student) {
    document.getElementById('studentName').innerText = `Student: ${student.name}`;
    document.getElementById('status').innerText = `Status: ${student.status}`;
    document.getElementById('studentInfo').style.display = 'block';
  } else {
    alert('Invalid User ID. Please try again.');
  }
}

function updateStatus(action) {
  const userId = document.getElementById('userId').value;
  const student = students[userId];

  if (student) {
    student.status = `Updated status for ${student.name}: ${action}`;
    document.getElementById('status').innerText = `Status: ${student.status}`;
  } else {
    alert('Invalid User ID. Please try again.');
  }
}
