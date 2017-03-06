function celsius(){
 document.getElementById('celsius').value = (5/9)*(document.getElementById('fahrenheit').value-32);
};

function fahrenheit(){
 document.getElementById('fahrenheit').value = (document.getElementById('celsius').value*9/5)+32;
};
