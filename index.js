var n=Math.random();
n=n*6;
n=Math.floor(n) + 1;

var n1=Math.random();
n1=n1*6;
n1=Math.floor(n1) + 1;
document.querySelector(".img1").setAttribute("src","images/dice"+n+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+n1+".png");

if(n > n1)
{
    document.querySelector("h1").innerHTML="player 1 wins";
}
else if(n1 > n)
{
    document.querySelector("h1").innerHTML="player 2 wins";
}
else{
    
    document.querySelector("h1").innerHTML="draw";

}