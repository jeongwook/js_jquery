var elForm, elSelectPackage, elPackageHint, elTerms;           // Declare variables
elForm = document.getElementById('formSignup');                 // Store elements
elSelectPackage = document.getElementById('package');
elPackageHint = document.getElementById('packageHint');
elTerms = document.getElementById('terms');
elTermsHint = document.getElementById('termsHint');

function packageHint() {                                        // Declare function
    var package = this.options[this.selectedIndex].value        // Get selected option
    if (package == 'monthly') {                                 // If monthly package
        elPackageHint.innerHTML = 'Save $10 if you pay for 1 year!';    // Show this message
    } else {                                                    // Otherwise
        elPackageHint.innerHTML = 'Wise choice!';               // Show this message
    }
}

function checkTerms(event) {                                    // Declare function
if (!elTerms.checked) {                                          // If checkbox ticked
        elTermsHint.innerHTML = 'You must aggre to the terms.'; // Show message
        event.preventDefault();                                // Don't submit form
    }
}

// Create even listeners: submit calls checkTerms(), change calls packageHint()
elForm.addEventListener('submit', checkTerms, false);
elSelectPackage.addEventListener('change', packageHint, false);