<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Student Dashboard</title>
</head>
<body>
  <h1>Student Dashboard - <?php echo $_GET['name']; ?></h1>
  <button onclick="updateStatus('BIF')">BIF</button>
  <button onclick="updateStatus('Restroom')">Student used restroom</button>

  <script>
    function updateStatus(action) {
      // Implement logic to update the status here
      // You can use AJAX or WebSockets to send a request to the server and update the status in real-time
      console.log('Status updated: ' + action);
    }
  </script>
</body>
</html>
