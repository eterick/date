// Lista zdjęć/gifów, które będą się zmieniać po kliknięciu "No"
const images = [
    "gif2.gif", // Pierwsze zdjęcie (to samo co w HTML)
    "gif3.gif", // Drugie zdjęcie po 1 kliknięciu "No"
    "gif4.gif", // Trzecie zdjęcie...
    "gif5.gif",
    "gif6.gif",
    "gif7.gif"  // Dodaj tyle, ile potrzebujesz
];

let clickCount = 0;
let yesButtonScale = 1;

function sayNo() {
    clickCount++;
    
    // Zmiana zdjęcia na kolejne z listy
    const imgElement = document.getElementById("main-image");
    if (clickCount < images.length) {
        imgElement.src = images[clickCount];
    } else {
        imgElement.src = images[images.length - 1]; // Zatrzymuje się na ostatnim zdjęciu
    }

    // Powiększanie przycisku 'Yes'
    const yesBtn = document.getElementById("yes-btn");
    yesButtonScale += 0.5; // O ile ma się powiększać za każdym razem
    yesBtn.style.transform = `scale(${yesButtonScale})`;
}

function sayYes() {
    // Co się dzieje, gdy w końcu kliknie "Yes"
    const container = document.getElementById("main-container");
    container.innerHTML = `
        <img src="success.gif" alt="Happy couple">
        <h1>Yay! I can't wait! ❤️</h1>
    `;
}