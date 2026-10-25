function volume_sphere() {

	const result = 0
    if(typeof radius !== "number" || Number.isNaN(radius)) return "NaN"
	else {
		result = (4/3) * Math.PI * radius * radius
	}

	return result.toFixed(4)
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
