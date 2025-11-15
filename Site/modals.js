$(document).ready(function() {

  $('#modal-container').load('modals.html', function() {
      console.log('Modal loaded successfully.');
  });

  function openHelpModal(type) {
    $('#helpModalLabel').text(type);
    $('#helpType').val(type);
    $('#helpModal').modal('show');
  }


    $(document).on('click', '#contactBtn', function(e){
    e.preventDefault();
    openHelpModal('Contact');
    });

    $(document).on('click', '#feedbackBtn', function(e){
        e.preventDefault();
        openHelpModal('Feedback');
    });

    $(document).on('click', '#reportBtn', function(e){
        e.preventDefault();
        openHelpModal('Report an Error');
    });
    $(document).on('submit', '#helpForm', function(e){
    e.preventDefault();
    
    const today = new Date();
    const formattedDate = today.getFullYear() + '-' +
                          String(today.getMonth() + 1).padStart(2, '0') + '-' +
                          String(today.getDate()).padStart(2, '0');
    $('#submissionDate').val(formattedDate);

    const formData = {
        type: $('#helpType').val(),
        name: $('#userName').val(),
        email: $('#userEmail').val(),
        message: $('#userMessage').val(),
        time: $('#submissionDate').val()
    };

    emailjs.send("service_c9fa7oy","template_mzknnie", formData)
        .then(function(response) {
            alert('Message sent successfully!');
            $('#helpModal').modal('hide');
            $('#helpForm')[0].reset();
        }, function(error) {
            alert('There was an error sending your message. Please try again.');
            console.error(error);
        });
    });
});
