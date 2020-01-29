if (window.sessionstore){

    var txtUsername = document.getElementById('username');      // Get form elements
    var txtAnswer = document.getElementById('answer');

    txtUsername.value = sessionStorage.getItem('username');     // Elements populated
    txtAnswer.value = sessionStorage.getItem('answer');         // by sessionStorage

    txtUsername.addEventListener('input', function () {         // Save data
        sessionStorage.setItem('uername', txtUsername.value);
    }, false);
    
    txtAnswer.addEventListener('input', function () {           // Save data
        sessionStorage.setItem('answer', txtAnswer.value);
    }, false);
}    