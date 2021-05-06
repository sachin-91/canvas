var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');


//line

//c.beginPath();
//c.moveTo(50,300);
//c.lineTo(300,100);
//c.lineTo(400,300);
//c.lineTo(100,300);
//c.strokeStyle = "red";
//c.stroke();

    
//for (var i = 0; i < 55; ++i){
//    var x = Math.random() * window.innerWidth;
  //  var y = Math.random() * window.innerHeight;
    //c.beginPath();
    //c.arc(x,y,35,0,Math.PI*2,false);
    //c.strokeStyle = Math.random()*'rgb(225,0,0)',Math.random()*'rgb(0,0,255)',Math.random()*'rgb(0,255,0)';
    //c.stroke();

//}

//var x =Math.random() * innerWidth;
//var y = Math.random() *innerHeight;
//var radius =30;
//var dx = (Math.random() - 0.5) * 9;
//var dy = (Math.random() -0.5) * 9 ;

function Circle(x,y ,dx ,dy ,radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    
    this.draw = function(){
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI * 2 ,false);
        c.strokeStyle = 'red';
        c.fill();
        c.stroke();
    }
    this.update = function(){
        if(this.x + this.radius > innerWidth || this.x - this.radius <0 ){
            this.dx = - this.dx;
        }
        if(this.y + this.radius > innerHeight || this.y - this.radius < 0 ){
            this.dy =- this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        
        this.draw();
    }
}

//
var circleArray = [];
for(var ani = 0; ani < 100; ani++){
    var radius =10;
    var x =Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() *(innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 1;
    var dy = (Math.random() -0.5) * 1 ;
    
    circleArray.push(new Circle(x,y,dx,dy,radius));
    
}
console.log(circleArray);


function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth, innerHeight);
         
    for(var i = 0; i < circleArray.length; i++){
        circleArray[i].update();
    }
   
}
animate();