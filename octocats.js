//Write your constructor function below.
//You should have 2 instance variables and 1 instance function included.
function Octocat (n,a){
  this.name = n;
  this.arms = a;

  this.slap = function(){
    for(var s=0;s<this.arms;s++){
      console.log("SLAP");
    }
  }
}




//Write your 3 new octocat objects below here.
var oldcat = new Octocat("Rob",7)
var yourcat = new Octocat("Sam",1)
var thecat = new Octocat("Chamillionaire",3)
