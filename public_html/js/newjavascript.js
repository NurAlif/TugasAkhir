/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var devheight = document.documentElement.clientHeight;
var devwidth = document.documentElement.clientWidth;

document.getElementById("subheader").style.height = document.documentElement.clientHeight + 2000+"px";
document.getElementById("header").style.height = document.documentElement.clientHeight +"px";
document.getElementById("subheader").style.width = document.documentElement.clientWidth + "px";
document.getElementById("contcarl").style.height = document.documentElement.clientHeight - 70+"px";

document.getElementById("headermenucont").style.height = (Math.sqrt((devheight*devheight)+((devheight/2)*(devheight/2)))) + "px";
document.getElementById("headermenucont").style.width = 2345+ "px";

var p = new Array();
var cp = new Array();

p[0] = document.getElementById("p1");
p[1] = document.getElementById("p2");
p[2] = document.getElementById("p3");

cp[0] = document.getElementById("cp1");
cp[1] = document.getElementById("cp2");
cp[2] = document.getElementById("cp3");

var runtime = setInterval(runtimer,2000);

var time = 0;

p[0].style.width = document.documentElement.clientWidth - 250 +"px";
p[1].style.width = document.documentElement.clientWidth - 250 +"px";
p[2].style.width = document.documentElement.clientWidth - 250 +"px";
p[0].style.height = document.documentElement.clientHeight - 70 + "px";
p[1].style.height = document.documentElement.clientHeight - 70 + "px";
p[2].style.height = document.documentElement.clientHeight - 70 + "px";

function activecarl(){
    
}

function disp(no){
    p[0].hidden = true;
    p[1].hidden = true;
    p[2].hidden = true;
    p[no].hidden = false;
    
}

disp(2);

function runtimer(){
    switch(time){
        case 0 :
            disp(0);
            time = 1;
            break;
            
            
        case 1 :
            disp(1);
            time++;
            break;
            
        case 2 :
            disp(2);
            time = 0;
            break;
         
    }
}

alert("--------------------------------------------------------\n --------------------------------------------------------\n --------------------------------------------------------\n \n Realtime  progress   :   https://github.com/NurAlif/TugasAkhir \n \n\
----------------------------------------------------");



