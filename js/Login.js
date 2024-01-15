function checkData(event) {
    event.preventDefault();

    var enteredEmail = document.getElementById('Email').value;
    var enteredPassword = document.getElementById('Password').value;

    var storedEmail = localStorage.getItem('userEmail');
    var storedPassword = localStorage.getItem('userPassword');

    if (storedEmail && storedPassword) {
        if (enteredEmail === storedEmail && enteredPassword === storedPassword) {
            alert('Login successful');
            // Redirect to dashboard.html
            window.location.href = 'studentDashboard.html'; 
        } else {
            alert('Invalid Login Details');
        }
    } else {
        alert('Create an account first');
    }
}
