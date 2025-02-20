let radius = document.querySelector("#radius").value
let v
let volume=document.querySelector("#volume")
function volume_sphere(event, radius) {
    //Write your code here
	event.preventDefault();
	let radius = parseFloat(radiusInput);
	if(isNaN(radius) || radius<0){
		return NaN
	}
	v=4*Math.PI*Math.pow(radius,3)/3
document.querySelector("#volume").value=v.toFixed(4)
	
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
