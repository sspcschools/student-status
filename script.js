const students = [
  { name: "Max Weller", status: "Not updated" },
  // Add more students here
  // { name: "Student Name", status: "Not updated" }
];

let currentStudentIndex = 0;

function updateStatus() {
  const student = students[currentStudentIndex];
  const newStatus = `Updated status for ${student.name}`;
  document.getElementById('status').innerText = newStatus;

  // Move to the next student for the next button click
  currentStudentIndex = (currentStudentIndex + 1) % students.length;
  document.getElementById('studentName').innerText = students[currentStudentIndex].name;
}
