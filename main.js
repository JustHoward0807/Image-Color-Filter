var i1=document.getElementById("i1");
var c1=document.getElementById("c1");
var r2=document.getElementById("r2");
var btxt=document.getElementById("btxt");
var f1=document.getElementById("f1");
var fileReader = new FileReader();
f1.addEventListener("change",readimg);
fileReader.addEventListener("load",loadimg);


function readimg()
{
    
   fileReader.readAsDataURL(f1.files[0]);
   f1.value=null;
   i1.style.display = "block";
   c1.style.display = "none";
}

function loadimg()
{
   i1.src = fileReader.result;
   r1.value=r2.value=btxt.value=btxt2.value=0;

}
function rangepro()
{
   btxt.value=r1.value;
   btxt2.value=r2.value;
   BrightContrast(r1.value, r2.value);
}
function textpro()
{
   r1.value=btxt.value;
   r2.value=btxt2.value;
   BrightContrast(btxt.value, btxt2.value);
}

function BrightContrast(bright, contrast) {
     c1.width=i1.width;
     c1.height=i1.height;
     var c2d=c1.getContext("2d");
     c2d.drawImage(i1, 0, 0);
     var imgData = c2d.getImageData(0, 0, c1.width, c1.height);
    
     var bright = parseInt(bright);
     var contrast = parseInt(contrast)
     contrast = contrast / 100;
     for(var i=0;i<imgData.data.length;i+=4) {
         imgData.data[i]= 127.5 + (imgData.data[i] - 127.5) * (1 + contrast) + bright;  //紅
         imgData.data[i+1]= 127.5 + (imgData.data[i + 1] - 127.5) * (1 + contrast) + bright; //綠
         imgData.data[i+2]= 127.5 + (imgData.data[i + 2] - 127.5) * (1 + contrast) + bright; //藍	  
 }
     c2d.putImageData(imgData, 0, 0);
     
     i1.style.display = "none";
     c1.style.display = "block";
     
 }