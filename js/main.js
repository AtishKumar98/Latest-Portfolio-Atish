(function() {
    // Initialize EmailJS with your public key
    emailjs.init({
      publicKey: "B6B0MO-6g6BVGsvWq",
    });
})();

// Function to handle form submission
function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the input values when the form is submitted
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let work = document.getElementById("inputState").value;

    // Create the parameters object
    let params = {
        name: name,
        email: email,
        message: message,
        work:work,
    };

    console.log("Input values:", params); // Debugging statement

    // Send email using EmailJS
    emailjs.send("service_k3m1rss", "template_ypy23ut", params)
        .then(() => {
            alert("Mail Sent! Thank you We'll contact you soon.");
        })
        .catch((error) => {
            console.log('FAILED...', error);
        });
}