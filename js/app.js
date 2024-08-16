//claves para encriptar
const traduccion = {"a": "ai", "e": "enter", "i": "imes", "o": "ober", "u": "ufat"};

function encript(event){
    event.preventDefault();
    document.querySelector("#warning").removeAttribute("style");
    let textarea = document.querySelector("#text");
    const text = textarea.value;
    let area_default = document.querySelector("#default");
    let area_result = document.querySelector("#result");
    let text_output = document.querySelector("#text_output");
    let out = "";

    if (text != ""){
        for(var i=0; i < text.length; i++){
            if(((text[i] < 'a') || (text[i] > 'z')) && (text[i] != ' ')){
                document.querySelector("#warning").style.color = "red";
                document.querySelector("#warning").style.fontSize = "16px";
                alert("Solo letras minúsculas y sin acentos")
                return;
            }
            else if((text.length == 1 && text == " ") || text.replace(/ /g, "") == ""){
                area_default.classList.remove("invisible");
                area_result.classList.add("invisible");
                return;
            }
            if(text[i] == 'a'){
                out += traduccion["a"] ;
            }
            else if(text[i] == 'e'){
                out += traduccion["e"];
            }
            else if(text[i] == 'i'){
                out += traduccion["i"]; 
            }
            else if(text[i] == 'o'){
                out += traduccion["o"]; 
            }
            else if(text[i] == 'u'){
                out += traduccion["u"]; 
            }
            else{
                out += text[i];
            }
        }

        area_default.classList.add("invisible");
        area_result.classList.remove("invisible");
        text_output.innerHTML = out;
    }

    return;

}

function desencript(event){
    event.preventDefault();
    document.querySelector("#warning").removeAttribute("style");
    var textarea = document.querySelector("#text");
    var text = textarea.value;
    var area_default = document.querySelector("#default");
    var area_result = document.querySelector("#result");
    var text_output = document.querySelector("#text_output");
    if (text != ""){
        for(var i=0; i < text.length; i++){
            if(((text[i] < 'a') || (text[i] > 'z')) && (text[i] != ' ')){
                document.querySelector("#warning").style.color = "red";
                document.querySelector("#warning").style.fontSize = "16px";
                return;
            }
            else if((text.length == 1 && text == " ") || text.replace(/ /g, "") == ""){
                area_default.classList.remove("invisible");
                area_result.classList.add("invisible");
                return;
            }
        }
        area_default.classList.add("invisible");
        area_result.classList.remove("invisible");
        text = text.replace(new RegExp(traduccion["a"], "g"), "a");
        text = text.replace(new RegExp(traduccion["e"], "g"), "e");
        text = text.replace(new RegExp(traduccion["i"], "g"), "i");
        text = text.replace(new RegExp(traduccion["o"], "g"), "o");
        text = text.replace(new RegExp(traduccion["u"], "g"), "u");
        text_output.innerHTML = text;
    }
    return;
}

function copy(event){
    event.preventDefault();
    const text_output = document.querySelector("#text_output");
    navigator.clipboard.writeText(text_output.value);
}


