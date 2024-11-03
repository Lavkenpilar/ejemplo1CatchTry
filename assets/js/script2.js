async function getSomething() {
    try {
    const res = await fetch("https://estapaginanoexiste.cl");
    const data = await res.json();
    console.log(data);
    } catch (e) {
        const errorSpan = document.getElementById ("text")
        errorSpan.innerHTML = `Algo salio mal! Error:${e.message}`

    /*alert(e.message);*/
    }
    }
    getSomething(); 