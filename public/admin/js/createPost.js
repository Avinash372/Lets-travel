let createForm = document.querySelector(".create-post-form");
let title = document.querySelector("#title");
let country = document.querySelector("#country");
let imageURL = document.querySelector("#imageURL");
let text = document.querySelector("#text");

createForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let createText = text.value;
    let createDescription;
    if (createText.indexOf(".") === -1) {
        createDescription = createText;
    } else {
        createDescription = createText.substring(
            0,
            createText.indexOf(".") + 1
        );
    }
    fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: title.value,
            country: country.value,
            imageURL: imageURL.value,
            text: createText,
            description: createDescription,
        }),
    })
        .then((response) => response.text())
        .then((data) => window.history.go());
});
