
function volume_sphere(event, radius) {
    //Write your code here
	let radius = document.querySelector("#radius").value
	event.preventDefault();
	let radius = parseFloat(radiusInput);
	if(isNaN(radius) || radius<0){
		return NaN
	}
	v=(4/3)*Math.PI*Math.pow(radius,3)
document.querySelector("#volume").value=v.toFixed(4)
	
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
