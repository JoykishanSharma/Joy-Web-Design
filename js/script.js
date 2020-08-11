const newsletter_subscribe = document.querySelector(".button1");
const email_input = document.querySelector('.emailAddress');
const quotaForm = document.querySelector('#book_quota');
const quotaName = document.querySelector('#inputFieldName');
const quotaEmail = document.querySelector('#inputFieldEmail');
const quotaMessage = document.querySelector('#inputFieldMessage');

const mail_format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

newsletter_subscribe.addEventListener('click', function (event) {
	event.preventDefault();

	if (email_input.value.match(mail_format)) {
		alert("You are now Subscribed to our Newsletter.\nThank you");
	} else {
		alert("Please Enter a valid Email Address");
	}
});

if (quotaForm !== null) {
	quotaForm.addEventListener('click', function (event) {
		event.preventDefault();

		checkInputs();
	});
}
function checkInputs() {
	const nameValue = quotaName.value;
	const emailValue = quotaEmail.value;
	const messageValue = quotaMessage.value;


	if (nameValue === "") {
		alert("Please type a valid name")
	} else if (emailValue === "" || !emailValue.match(mail_format)) {
		alert("Please type a valid email address")
	} else if (messageValue === "") {
		alert("Please type a valid message")
	} else {
		alert('We will book a quota for you. \nThank you for your interest.');
	}


}
