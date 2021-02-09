function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    //Client.checkForName(formText)
    Client.checkURL(formText)

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
        document.getElementById('scoretag').innerHTML = 'Score Tag: ' + res.score_tag;
        document.getElementById('subjectivity').innerHTML = 'Subjectivity: ' + res.subjectivity;
        document.getElementById('irony').innerHTML = 'Score Tag: ' + res.irony;
    })
}

export { handleSubmit }
