async function getSomething() {
    try {
    const res = await fetch("https://estapaginanoexiste.cl");
    const data = await res.json();
    console.log(data);
    } catch (e) {
    alert(e.message);
    }
    }
    getSomething();