let inputField = document.getElementById("input_field");
let buttoNs = document.getElementsByClassName("buttons")

for (let i = 0; i < buttoNs.length; i++) {
    buttoNs[i].addEventListener("click", (e) => {
        switch (e.target.innerHTML) {
            case 'C':
                inputField.innerHTML = ""
                break;
            case '=':
                try {

                    inputField.innerHTML = eval(inputField.innerHTML)
                } catch (e) {
                    inputField.innerHTML = e
                }
                break;
            default:
                inputField.innerHTML += e.target.innerHTML
        }

    })
}