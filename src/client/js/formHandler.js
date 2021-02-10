function handleSubmit(event) {
    event.preventDefault()
    //get link from field name and hand to handleURL function
    let formText = document.getElementById('name').value
    handleURL(formText)

}

//passes URL to checkURL function and then instructs to postData if valid; alerts user if invalid
function handleURL(url) {
    if (Client.checkURL(url)) {
        console.log('Valid Url');
        postData(url);
        return true;
    } else {
        alert("Please enter a valid URL");
        return false;
    }
}

//posts Data from API to webpage results section
async function postData(url) {
    try {
        const results = await fetch('http://localhost:8081/analyze', {
            method: 'POST',
            body: JSON.stringify({ articleLink: url }),
            headers: {
                "Content-Type": "application/JSON",
            }
        })
        const data = await results.json();
                //console.log("response from /analyze", data);
                document.getElementById('scoretag').innerHTML = 'Score Tag: ' + data.score_tag;
                document.getElementById('subjectivity').innerHTML = 'Subjectivity: ' + data.subjectivity;
                document.getElementById('irony').innerHTML = 'Score Tag: ' + data.irony;
    } catch (error) {
        return (error);
    }
}



export { handleSubmit, handleURL, postData}
