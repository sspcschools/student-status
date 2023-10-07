const students = [
  { name: "Max Weller", status: "Not updated", periods: {}, userId: "5928000256" },
  { name: "Charlotte Collier", status: "Not updated", periods: {}, userId: "5928000268" },
  { name: "Mason Collier", status: "Not updated", periods: {}, userId: "5928000267" }
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

function showStudentInfo() {
  const studentSelect = document.getElementById('studentSelect');
  currentStudentIndex = parseInt(studentSelect.value);
  const student = students[currentStudentIndex];
  document.getElementById('studentName').innerText = `Student: ${student.name}`;
  document.getElementById('status').innerText = student.status;
}
