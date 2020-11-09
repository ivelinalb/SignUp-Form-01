$('#register-user').click( function(e) {
    e.preventDefault();
    swal("Thank you!", "Registration completed successfully", "success");
});

$('#register-user').click(newGeristration);

function newGeristration(e) {
    e.preventDefault()
    let fistName = $('#first-name').val();
    let lastName = $('#last-name').val();
    let userEmail = $('#exampleInputEmail1').val();

    let user = `${fistName} ${lastName} - ${userEmail}`;

    let allUsers = $('.list-group');

    let newUser = $(`<li>${user}</li>`);
    newUser.addClass('list-group-item');

    newUser.appendTo(allUsers);

    fistName.val() = '';
    lastName.val() = '';
    userEmail.val() = '';

}