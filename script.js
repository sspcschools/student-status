const students = [
  { name: "Max Weller", status: "Not updated", periods: {} },
  // Add more students here
  // { name: "Student Name", status: "Not updated", periods: {} }
];

let currentStudentIndex = 0;

function updateStatus(action) {
  const student = students[currentStudentIndex];
  const newStatus = `Updated status for ${student.name}: ${action}`;
  document.getElementById('status').innerText = newStatus;
  student.status = newStatus;

  if (action === 'Bathroom') {
    // Display the bathroom popup
    document.getElementById('popup').style.display = 'block';
  }
}

function updateBathroomStatus() {
  const period = document.getElementById('period').value;
  const student = students[currentStudentIndex];

  if (!student.periods[period]) {
    student.periods[period] = { bathroom: 1 };
  } else {
    student.periods[period].bathroom++;
  }

  closePopup();
  updateStatus(`Student used bathroom for Period ${period}`);
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

function showStudentInfo(index) {
  currentStudentIndex = index;
  const student = students[index];
  document.getElementById('studentName').innerText = student.name;
  document.getElementById('status').innerText = student.status;
}
