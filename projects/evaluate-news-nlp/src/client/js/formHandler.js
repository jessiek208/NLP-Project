function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/analyze',{
        method: 'POST',
        body: JSON.stringify({articleLink: formText}),
        headers: {
            "Content-Type": "application/JSON", 
        }
    })
    .then(res => res.json())
    .then(function(res) {
        console.log("response from /analyze", res);
        document.getElementById('results').innerHTML = res.message
    })
}

export { handleSubmit }
