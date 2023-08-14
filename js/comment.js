const btn = document.getElementById('btn').addEventListener('click',function(){
    let value = document.getElementById('textArea').value;
    const newText = document.createElement('p');
    newText.style.color= "purple";
    newText.style.fontFamily= "roboto";
    newText.style.fontSize= "19px";
    newText.style.background= "yellowgreen";
    newText.style.borderRadius= "5px";
    newText.style.marginBottom= "10px";
    newText.innerText = value;
    document.getElementById('inject').appendChild(newText);
    document.getElementById('textArea').value = "";
})