<?php
// Sample student data (replace with actual student data)
$studentData = [
    "5928000256" => "Max Weller",
    "5928000268" => "Charlotte Collier",
    "5928000267" => "Mason Collier"
];

$userId = $_POST['userId'];

if (isset($studentData[$userId])) {
    $studentName = $studentData[$userId];
    header("Location: student.php?name=$studentName");
    exit();
} else {
    echo "Invalid User ID. Please try again.";
}
?>
