function addData(){

    var Firstname = document.getElementById('Firstname').value;
    var Lastname = document.getElementById('Lastname').value;
    var Email = document.getElementById('Email').value;
    var Password = document.getElementById('Password').value;
    var Studentid = document.getElementById('Studentid').value;
  
localStorage.setItem('userFirstname', Firstname);
localStorage.setItem('userLastname', Lastname);
localStorage.setItem('userEmail', Email);
localStorage.setItem('userStudentid', Studentid);
localStorage.setItem('userPassword', Password);

}