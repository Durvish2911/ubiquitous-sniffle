const { fabric } = require("./fabric");

var canvas= new fabric.Canvas ('mydanvasissanwas');
playerx =10;
playery =10;
blockimagewidth =30;
blockimageheight =30;
var playerobject= "";
var blockimageobject
function playerupdate(){
    console.log("dd")
    fabric. Image. fromURL("marvel-avengers-endgame-e1556039297104.jpg"),function(Img){
        playerobject = Img;
        playerobject.scaleToWidth(150);
        playerobject.scaleToHeight(150);
        playerobject.set({
            top:playery,
            left:playerx
        });
    }
    canvas.add(playerobject);
}
function new_image(get_image){
    console.log("webwhatsapp")
    fabric.Image.fromURL(get_image,function(Img){
        blockimageobject = Img;
    }
    blockimageobject.scaleToWidth(blockimagewidth);
    blockimageheight.scaleToHeight(blockimageheight);
    blockimageobject.set({
        top:playery,
        left:playerx
    })
    canvas.add(blockimageobject)
});
}
window.addEventListener("keydwon",my_name_is_mahan);
function my_name_is_mahan(e){
    keypressed=e.keycode;
    console.log(keypressed);
    if(keypressed == '38'){
        up();
        console.log("up");
    }
    if(keypressed == '40'){
      down();
      console.log("down");
    }
    if(keypressed == '37'){
        left();
        console.log("left");
    }
    if(keypressed == '39'){
        right();
        console.log("right");
    }
}