const changeText = () => {
    setTimeout(() => {
        document.body.style.background ="green"
        document.body.style.backgroundSize = "fixed"
        document.getElementById("h1").innerHTML = "Raa Nuu Kavalayya"
    }, 200)
    setTimeout(() => {
        document.body.style.background = "yellow"
        document.body.style.backgroundSize = "fixed"
        document.getElementById("h1").innerHTML = "Nuu Kavalayya "
    }, 400)
    setTimeout(() => {
        document.body.style.background = "violet"
        document.body.style.backgroundSize = "fixed"
        document.getElementById("h1").innerHtml="yaa yaa"
    }, 600)
    setTimeout(() => {
        document.body.style.background = "pink"
        document.body.style.backgroundSize = "fixed"
        document.getElementById("h1").innerHTML = "kavalayya ya ya ya"
    }, 600)
   
}

setInterval(changeText, 1000)
const bgAudio = document.getElementById("bgAudio");
