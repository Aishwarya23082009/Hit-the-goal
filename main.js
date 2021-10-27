Canvas= new fabric.Canvas("my_canvas");

var ball_x=40;
var ball_y=40;
var hole_x=400;
var hole_y=10;

block_width = 5;
block_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h.png", function(Img){
		hole_object=Img;
		hole_object.scaleToWidth(50);
		hole_object.scaleToHeight(40);
		hole_object.set({
			top: hole_y,
			left: hole_x
		});
	Canvas.add(hole_object);
	});
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img){
		ball_object=Img;
		ball_object.scaleToWidth(50);
	ball_object.scaleToHeight(40);
		ball_object.set({
			top: ball_y,
			left: ball_x
		});
	Canvas.add(ball_object);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
if((ball_x==hole_x)&&(ball_y==hole_y)){
	Canvas.remove(ball_object);
	document.getElementById("hd3").innerHTML="YOU HAVE HIT THE GOAL!!!";
	document.getElementById("my_canvas").style.borderColor="red";
}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
	    if(ball_y>=0){
			ball_y=ball_y-block_height;
			console.log("block height:"+ block_height);
			console.log("when up arrow key is pressed,x="+ hole_x+",y="+hole_y);
			Canvas.remove(ball_object);
			new_image();
		}
	}

	function down()
	{
		if(ball_y<=500){
			ball_y=ball_y+block_height;
			console.log("block height:"+ block_height);
			console.log("when up arrow key is pressed,x="+ hole_x+",y="+hole_y);
			Canvas.remove(ball_object);
			new_image();
		}
	}

	function left()
	{
		if(ball_x >5)
		{
			ball_x=ball_x-block_width;
				console.log("block height:"+ block_width);
				console.log("when up arrow key is pressed,x="+ hole_x+",y="+hole_y);
				Canvas.remove(ball_object);
				new_image();
			}
		}
	

	function right()
	{
		if(ball_x <=1050)
		{
			ball_x=ball_x+block_width;
				console.log("block height:"+ block_width);
				console.log("when up arrow key is pressed,x="+ hole_x+",y="+hole_y);
				Canvas.remove(ball_object);
				new_image();
			}
		}}