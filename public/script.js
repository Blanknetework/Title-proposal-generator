function generateTitle() {
    fetch("generate")
        .then(response => response.text())
        .then(title => {
            document.getElementById("generatedTitle").textContent = title;
        })
        .catch(error => console.error("Error:", error));
}

function saveTitle() {
    const title = document.getElementById("generatedTitle").textContent;
    if (!title) return alert ("Generate a title first!");

    fetch("/save", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ title })
    })
        .then(response => response.text())
        .then(data => alert(data))     
        .catch(error => console.error("Error:", error));        
}
