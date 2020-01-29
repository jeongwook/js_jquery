response = ' {"deals: [{"title": "Farrow and Ball",... '        // JSON data

if (response) {
    try{
        var dealData = JSON.parse(response);                    // Try to parse JSON
        showContent(dealData);                                  // Show JSON data
    }catch(e) {
        var errorMessage = e.name + ' ' + e.errorMessage        // Create error msg
        console.log(errorMessage);                              // Show devs msg
        feed.innerHTML = '<enm>Sorry, could not load deals </em>';  // Users msg
    } finally {
        var link = document.createElement('a');                 // Add refresh link
        link.innerHTML = ' <a href="try-catch-finally.html">reload</a>';
        feed.appendChild(link);
    }
}