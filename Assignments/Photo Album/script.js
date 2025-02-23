$(document).ready(function () {
    function validateForm(event) {
        event.preventDefault(); 

        $('.error-message').text(''); 

        let isValid = true; // Assume form is valid

        // Get input values
        const Username = $('#inputUsername').val().trim();
        const imageTitle = $('#inputImageTitle').val().trim();
        const comment = $('#comment').val().trim();

        //  Username Validation
        if (Username.length < 6) {
            $('#usernameError').text('Username must be at least 6 characters.');
            isValid = false;
        }

        //  Image Title Validation
        if (imageTitle === '') {
            $('#imageTitleError').text('Image Title is required.');
            isValid = false;
        }

        //  Comment Validation
        if (comment === '') {
            $('#commentError').text('Comment is required.');
            isValid = false;
        }

        // If the form is valid, log data to console
        if (isValid) {
            console.log("Form Submitted Successfully!");
            console.log("Username:", Username);
            console.log("Image Title:", imageTitle);
            console.log("Comment:", comment);

            // Clear form fields after submission
            $('#inputUsername').val('');
            $('#inputImageTitle').val('');
            $('#comment').val('');

            alert("Form submitted successfully!");
        }
    }

    $('#feedbackForm').on('submit', validateForm);
});
