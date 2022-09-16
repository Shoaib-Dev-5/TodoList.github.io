let txt=document.getElementById("txt");
let para=document.getElementById('para');
function chaker(){
    lo=txt.value.toLowerCase();
    console.log("lo "+lo)
    let newtxt=lo.toString().split('').reverse().join('');
    if(txt.value.length==0){
        console.log("length "+txt.value.length)
        para.innerHTML=`Plz Fill Input`;
        }
    if(newtxt==lo && newtxt.length >0){
        console.log("newtext"+newtxt);
    para.innerHTML=`YOUR "  ${txt.value}  " is Palindrom`;
    para.style.color="green";
    }
    else if(newtxt.length>0){
    para.innerHTML=`YOUR "  ${txt.value}  " is NOT Palindrom`;
    para.style.color="red";

    }

}