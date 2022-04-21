//drop down 
var a = document.querySelector(".nav_right_drop1_sec");
a.style.transform = "scale(0)";
document.getElementById("drop_right1").addEventListener("click",(e)=>{
    e.stopPropagation();
    if(a.style.transform == "scale(0)"){
        a.style.transform = "scale(1)"
    }
    else { a.style.transform = "scale(0)"}
})
a.addEventListener("click",(e)=>{
    e.stopPropagation();
})

document.body.addEventListener("click",()=>{
    if(a.style.transform=="scale(1)"){
        a.style.transform="scale(0)"
    }
})
function cross1(){
    a.style.transform = "scale(0)"
}


// drop down for sign up
var a11 = document.querySelector(".nav_right_drop1_sec1");
a11.style.transform = "scale(0)";
document.getElementById("drop_right111").addEventListener("click",(e1)=>{
    e1.stopPropagation();
    if(a11.style.transform == "scale(0)"){
        a11.style.transform = "scale(1)"
    }
    else { a11.style.transform = "scale(0)"}
})
a11.addEventListener("click",(e1)=>{
    e1.stopPropagation();
})

document.body.addEventListener("click",()=>{
    if(a11.style.transform=="scale(1)"){
        a11.style.transform="scale(0)"
    }
})
function cross11(){
    a11.style.transform = "scale(0)"
}



//form validation
function validateform(){

    var name=document.form1.name.value;
    var password=document.form1.password.value;
    var email=document.form1.email.value;
    var em = email.indexOf("@");
    var em_dot = email.indexOf(".com");

    if(name==null || name=="" ) {
        alert("Name can't be blank");
        return false;
    }
    else if(name_letter_check()==true){
        alert(`"Number" is not allowed in name`)
        return false;
    }
    else if(email==""){
        alert("email can't be blank")
        return false;
    }
    else if(em==-1){
        alert("email should contain @ symbol");
        return false;
    }
    else if(em_dot==-1){
        alert(`email should contain ".com" symbol`);
        return false;
    }
    else if(password.length<8){
        alert("Password must be atleast 8 characters long.");
        return false;
    }
    else if(password_letters_check()==true){
        alert(`password should contain atleast one "Number"`)
        return false;
    }
    else if(password_case_check()==true){
        alert(`password should contain capital and small letters`)
        return false;
    }
    else if(password.search(/[~!@#$%^&*]/i) == -1){
        alert(`password should contain special characters`)
        return false;
    }

    function name_letter_check(){
        let flag=0;
        for(let i=0; i<name.length; i++){
            for(let j=0; j<=9; j++){
        if(name.charAt(i)==j){
            flag=1;
            break;
        }
        if(flag==1) {break;}
        }
        }
        if(flag==1){
            return true;
        }
    }

function password_letters_check(){
    let flag=0;
    for(let i=0; i<password.length; i++){
        for(let j=0; j<=9; j++){
    if(password.charAt(i)==j){
        flag=1;
        break;
    }
    if(flag==1) {break;}
    }
    }
    if(flag==0){
        return true;
    }
}

function password_case_check(){
    //checking for small case
    let flag=0;
    for(let i=0; i<password.length; i++){
        for(let j=97; j<=122; j++){
    if(password.charCodeAt(i)==j){
        flag=1;
        break;
    }
    if(flag==1) {break;}
    }
    }
    if(flag==0){
        return true;
    }
//checking for capital letters
    let flag1=0;
    for(let t=0; t<password.length; t++){
        for(let y=65; y<=90; y++){
    if(password.charCodeAt(t)==y){
        flag1=1;
        break;
    }
    if(flag1==1) {break;}
    }
    }
    if(flag1==0){
        return true;
    }
}
}
