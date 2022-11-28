document.querySelector("#getText").addEventListener("click", getText);

const getText = () => {
    fetch("sample.txt")
        .then((response) => response.text())
        .then((cleanText) => {
            document.querySelector("#output").innerHTML = cleanText;
        })
        .catch((error) => console.log(error))
}
document.querySelector("getText").addEventListener("click", getText)