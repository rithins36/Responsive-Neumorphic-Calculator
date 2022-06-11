let output=document.getElementById("input");

function display(num){
    output.value +=num;
}

function Clear(){
    output.value='';
}

function del(){
    output.value=output.value.slice(0,-1);
}

function calculate(){
    try{
        output.value=eval(output.value);
}
    catch(err){
        alert("Invalid expression");
    }
}