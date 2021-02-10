/*function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    const validURL = Client.checkURL(formText);
    if (validURL) {
        console.log('Valid Url');
        fetch('http://localhost:8081/analyze', {
            method: 'POST',
            body: JSON.stringify({ articleLink: formText }),
            headers: {
                "Content-Type": "application/JSON",
            }
        })
            .then(res => res.json())
            .then(function (res) {
                console.log("response from /analyze", res);
                document.getElementById('scoretag').innerHTML = 'Score Tag: ' + res.score_tag;
                document.getElementById('subjectivity').innerHTML = 'Subjectivity: ' + res.subjectivity;
                document.getElementById('irony').innerHTML = 'Score Tag: ' + res.irony;
            })
    } else {
        alert("Please enter a valid URL");
    }
}*/


function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    handleURL(formText)

}

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

/*function handleURL(url) {
    if (checkURL(url)) {
        console.log('Valid Url');
        postURL(url);
        return true;
    } else {
        alert("Please enter a valid URL");
        return false;
    }
}*/

/*function postURL(url) {
    fetch('http://localhost:8081/analyze', {
            method: 'POST',
            body: JSON.stringify({ articleLink: url }),
            headers: {
                "Content-Type": "application/JSON",
            }
        })
            .then(res => res.json())
            .then(function (res) {
                console.log("response from /analyze", res);
                document.getElementById('scoretag').innerHTML = 'Score Tag: ' + res.score_tag;
                document.getElementById('subjectivity').innerHTML = 'Subjectivity: ' + res.subjectivity;
                document.getElementById('irony').innerHTML = 'Score Tag: ' + res.irony;
            })
}*/

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
