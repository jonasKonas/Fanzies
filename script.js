
const generateBtn = document.querySelector("#gen-btn")
const body = document.querySelector("body")
var fan = document.querySelector('.fan')

//Slider input output 
var slider = document.getElementById("range");
var output = document.getElementById("range-output");
output.innerHTML = slider.value;
slider.oninput = function() {
  output.innerHTML = this.value;
}

//generate button function
generateBtn.addEventListener("click", function(x){  
  addFan(document.getElementById("range").value)  

});



//"enter" key listener
body.addEventListener('keydown', function(e){
  if (e.key === 'Enter') { 
    console.log("Enter pressed") 
    numberOfFans = document.getElementsByClassName("fans").length
    
      for (let i = 0; i < numberOfFans; i++) {
        var fan = document.getElementById(`fan${i}`);
        TweenMax.to(fan, 0.5, {rotation:360, repeat:-1, ease:Linear.easeInOut})
      }
 }    
});



//Adding fans function
function addFan(x){  
  for (var i =1; i < x; i++){
    var img = document.createElement('img')
    randomNumber = Math.floor(Math.random() * 6+1)    
    img.src = `./img/fan (${randomNumber}).png`
    img.classList.add("fans")   
    document.getElementById('fan-grid').appendChild(img)
    img.setAttribute("id",`fan${i}`)
  }
}

