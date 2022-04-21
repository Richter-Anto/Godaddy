var count1=true;
var count2=true;
var count3=true;
var count4=true;
var count5=true;
var count6=true;
var count7=true;
var count8=true;
var p1 = document.createElement("p")
var p2 = document.createElement("p")
var p3 = document.createElement("p")
var p4 = document.createElement("p")
var p5 = document.createElement("p")
var p6 = document.createElement("p")
var p7 = document.createElement("p")
var p8 = document.createElement("p")

function drop1(){

    if(count1==true){
    let drop = document.getElementById("drop1")
    p1.innerHTML="GoDaddy offers more than just a platform to build your website, we offer everything you need to create an effective, memorable online presence. Already have a site? We offer hosting plans that will keep it fast, secure and online. Our professional email helps you build a professional image, while our online marketing tools empower entrepreneurs to get online with an SEO-friendly website. GoDaddy is an all-in-one solution provider to get your idea online, backed with expert, personalized support from GoDaddy Guides."
    drop.appendChild(p1);
    p1.className="drop_p1"
    
    }
    if(count1==false){
        p1.remove();
    }

    if(count1==true){
        count1=false;
    }else count1=true;
}

function drop2(){

    if(count2==true){
    let drop = document.getElementById("drop2")
    p2.innerHTML="Even small local businesses that only serve their hometown need a site. That's because the web is the first place people go when looking for a product or service. A website helps every business"
    drop.appendChild(p2);
    p2.className="drop_p1"
    
    }
    if(count2==false){
        p2.remove();
    }

    if(count2==true){
        count2=false;
    }else count2=true;
}

function drop3(){

    if(count3==true){
    let drop = document.getElementById("drop3")
    p3.innerHTML="There are a lot of reasons to switch from your free email to a domain-based email, but here are the top 3"
    drop.appendChild(p3);
    p3.className="drop_p1"
    
    }
    if(count3==false){
        p3.remove();
    }

    if(count3==true){
        count3=false;
    }else count3=true;
}

function drop4(){

    if(count4==true){
    let drop = document.getElementById("drop4")
    p4.innerHTML="GoDaddy is the world’s largest and trusted domain registrar that empowers people like you with creative ideas to succeed online. Buying a domain name is easy with our domain search tool and domain name generator tools you can find the perfect website address for your business."
    drop.appendChild(p4);
    p4.className="drop_p1"
    
    }
    if(count4==false){
        p4.remove();
    }

    if(count4==true){
        count4=false;
    }else count4=true;
}

function drop5(){

    if(count5==true){
    let drop = document.getElementById("drop5")
    p5.innerHTML="Because it’s a fast, simple way to create a website that you — and your customers — will love. Simply type in your idea or industry and GoDaddy Website Builder will pull up a number of professionally designed, ready-to-launch templates. From there, just add your own text and images and you’re good to go."
    drop.appendChild(p5);
    p5.className="drop_p1";
    
    }
    if(count5==false){
        p5.remove();
    }

    if(count5==true){
        count5=false;
    }else count5=true;
}

function drop6(){

    if(count6==true){
    let drop = document.getElementById("drop6")
    p6.innerHTML="With nearly 20 years in the industry, we have the experience, the technology and the hosting experts to help web designers, developers, bloggers and online businesses create and maintain their online presence. Our secure web hosting platform, complete with cPanel, offers a 99.9% uptime guarantee and award-winning support, which has helped nearly 20+ million customers get online."
    drop.appendChild(p6);
    p6.className="drop_p1"
    
    }
    if(count6==false){
        p6.remove();
    }

    if(count6==true){
        count6=false;
    }else count6=true;
}

function drop7(){

    if(count7==true){
    let drop = document.getElementById("drop7")
    p7.innerHTML="GoDaddy offers reliable and affordable WordPress hosting plans, one-click installs and the latest version so you have the most recent features available for your site. Your website content is managed from one place; you have a wealth of themes and add-ons giving you limitless options to succeed."
    drop.appendChild(p7);
    p7.className="drop_p1"
    
    }
    if(count7==false){
        p7.remove();
    }

    if(count7==true){
        count7=false;
    }else count7=true;
}

function drop8(){

    if(count8==true){
    let drop = document.getElementById("drop8")
    p8.innerHTML="There are a few different reasons. Our award-winning support is always high on the list of why people move their presence to GoDaddy. Of course, our prices — including a free 1-year extension on many domain transfers — is another popular reason. And if you already have one or more of our products, transferring your domain, website or hosting to us lets you consolidate your web presence with one provider so it’s easier to manage."
    drop.appendChild(p8);
    p8.className="drop_p1"
    
    }
    if(count8==false){
        p8.remove();
    }

    if(count8==true){
        count8=false;
    }else count8=true;
}




//drop down 
// var drop_sec = document.querySelector(".nav_right_drop1_sec");
// drop_sec.style.transform="scale(0)"
// console.log(drop_sec.style.transform);
// function drop_right1(){
//     if(drop_sec.style.transform == "scale(0)"){
//         drop_sec.style.transform = "scale(1)"
//     }   
// }

// function cross1(){
//     drop_sec.style.transform="scale(0)"
// }


//drop down
// var drop_sec = document.querySelector(".nav_right_drop1_sec");
// document.body.addEventListener("click",(e)=>{
//     if(drop_sec.classList.contains("drop")){
//         drop_sec.classList.toggle("drop")
//     }
// })
// document.querySelector(".fa-solid1").addEventListener("click",(e)=>{
//     e.stopPropagation();
//     drop_sec.classList.toggle("drop")
// })


//drop down 1
var a = document.querySelector(".nav_right_drop1_sec");
a.style.transform = "scale(0)";
document.getElementById("drop_right1").addEventListener("click",(e)=>{
    a1.style.transform = "scale(0)"
    e.stopPropagation();
    if(a.style.transform == "scale(0)"){
        a.style.transform = "scale(1)"
    }
    // else { a.style.transform = "scale(0)"}
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

//drop down 2
var a1 = document.querySelector(".nav_right_drop2_sec");
a1.style.transform = "scale(0)";
document.getElementById("drop_right2").addEventListener("click",(e)=>{
    a.style.transform = "scale(0)"
    e.stopPropagation();
    if(a1.style.transform == "scale(0)"){
        a1.style.transform = "scale(1)"
    }
    else { a1.style.transform = "scale(0)"}
})
a1.addEventListener("click",(e)=>{
    e.stopPropagation();
})

document.body.addEventListener("click",()=>{
    if(a1.style.transform=="scale(1)"){
        a1.style.transform="scale(0)"
    }
})
function cross2(){
    a1.style.transform = "scale(0)"
}


//iframe
var i = document.querySelector(".ifra");
i.style.display = "none";
var close_btn1 = document.querySelector(".cross_video1");
close_btn1.style.display = "none";

function btn1(){
    close_btn1.style.display = "block"
    if(i.style.display == "none"){
        i.style.display = "block"
    }
    document.body.style.overflowY="hidden"
}

function cross_video1(){
    i.style.display = "none";
    document.body.style.overflowY="auto";
    close_btn1.style.display = "none"
}



//carousal button function
var c_btn1 = document.querySelector(".carou_btn_left"); //btn1
var c_btn2 = document.querySelector(".carou_btn_right"); //btn2
var carou_all = document.querySelector(".container"); //all carousal cards

var a_per = 0;

c_btn1.addEventListener("click",()=>{
    a_per+=10;
    if(a_per>0) { a_per=0; }
    carou_all.style.transform=`translate(${a_per}%)`;
    carou_all.style.transition="all ease 0.5s";
    // console.log(`left${a_per}`);
})
c_btn2.addEventListener("click",()=>{
    a_per-=10;
    if(a_per<-70) { a_per = -70; }
    carou_all.style.transform=`translate(${a_per}%)`;
    carou_all.style.transition="all ease 0.5s";
    // console.log(`right${a_per}`);
})