document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
        
            const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                    const message = document.getElementById('message').value;

                        alert(`Thank you for your message, ${name}! We will get back to you at ${email} soon.`);
                            
                                // Optionally, you can add code to send the form data to a server
                                // });
                                //
