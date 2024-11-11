function sendEmail() {
    const formData = {
        user_name: document.querySelector('input[name="user_name"]').value,
        user_email: document.querySelector('input[name="user_email"]').value,
        message: document.querySelector('textarea[name="message"]').value,
    };

    console.log(formData); // Untuk debugging

    emailjs.send("service_m1ligdb", "template_bttjmza", formData)
        .then((response) => {
            alert("Pesan berhasil dikirim!");
            console.log("SUCCESS!", response.status, response.text);
        })
        .catch((error) => {
            alert("Gagal mengirim pesan. Coba lagi nanti.");
            console.error("FAILED...", error);
        });
}
