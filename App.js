let input_value;

const submit_button = document.querySelector("#btn").addEventListener("click", () => {
    input_value = document.getElementById("type").value;
    document.getElementById('text').innerText = input_value;
    document.getElementById("popup").style.cssText = `
    transform: scale(1);
    animation: slide 2s; `;
})

const close_button = document.querySelector("#close").addEventListener("click", () => {
    document.getElementById("popup").style.cssText = `
    transform: scale(1);
    animation: unslide 2s forwards;`;
})
