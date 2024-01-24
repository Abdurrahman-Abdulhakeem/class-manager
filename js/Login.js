function checkData(event) {
    event.preventDefault();

    var enteredPassword = document.getElementById('Password').value;
    var enteredStudentid = document.getElementById('Studentid').value;

   
    var storedPassword = localStorage.getItem('userPassword');
    var storedStudentid = localStorage.getItem('userStudentid');

    if (storedStudentid && storedPassword) {
        if ( enteredPassword === storedPassword  && enteredStudentid === storedStudentid) {
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
