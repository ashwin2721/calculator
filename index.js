function clear(){

}

function calcdata(value){
form.value+=value

}

function calcdata2(){
    form.value=form.value.slice(0,-1);
}

function calcdata1(){
    form.value=""
}
function calcdata3(){
    form.value+="/"
}
function calcdata4(){
    form.value+="*"
}
function calcdata5(){
    form.value+="-"
}
function calcdata6(){
    form.value+="+"
}
function calcdata7(){
    form.value=eval(form.value)
}