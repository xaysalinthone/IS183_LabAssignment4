var Contact = (function () {
    function Contact() {
    }
    Contact.prototype.goToHome = function () {
        window.location.href = 'index.html';
    };
    return Contact;
})();
var contact = new Contact();
