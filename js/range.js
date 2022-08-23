const slider = document.getElementById('calc__range');
const output = document.getElementById('zxc');

output.innerHTML = slider.value;

slider.oninput = function(){
    output.innerHTML = this.value + " &#8381";
}