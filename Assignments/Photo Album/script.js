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

        // If the form is valid, proceed
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


//Photo Selection

document.addEventListener('DOMContentLoaded', function() {
    const selectElement = document.getElementById('inputImageTitle');
    const imageElement = document.getElementById('selectedImage');
  
    selectElement.addEventListener('change', function() {
      const selectedImage = this.value;
  
      if(selectedImage) {
        imageElement.src = selectedImage;
        imageElement.classList.remove('d-none');
      } else {
        imageElement.src = "";
        imageElement.classList.add('d-none');
      }
    });
  });
  