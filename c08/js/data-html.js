var xhr = new XMLHttpRequest();                 // Create XMLHttpRequest object

xhr.onload = function () {                      // When repsonse has loaded
    // The following condition check will not work locally - only on a server
    // if(xhr.status === 200) {
        document.getElementById('content').innerHTML = xhr.responseText; // Update
    // }
};

xhr.open('GET', 'data/data.html', true);        // Prepare the request
xhr.send(null);                                 // Send the request

