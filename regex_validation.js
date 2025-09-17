<!DOCTYPE html>
<html>
<head>
  <title>Form Validation</title>
  <script src="regex_validation.js"></script>
</head>
<body>
  <form onsubmit="return validateForm()">
    <label>Username:</label>
    <input type="text" id="username"><br><br>

    <label>Email:</label>
    <input type="text" id="email"><br><br>

    <label>Password:</label>
    <input type="password" id="password"><br><br>

    <button type="submit">Submit</button>
  </form>
</body>
</html>