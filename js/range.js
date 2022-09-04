const slider = document.getElementById('calc__range');
const output = document.getElementById('zxc');
const possibility = document.getElementById('pos__sub');

output.innerHTML = slider.value;

console.log(slider);

// 1000  -  100 000

slider.addEventListener("mousemove", function(){
    var x = slider.value / 1000;
    var color = 'linear-gradient(90deg, #007aff ' + x + '%, #d9dde0 ' + x + '%)';
    slider.style.background = color;
    // console.log(x);
})
slider.addEventListener("touchmove", function(){
    var x = slider.value / 1000;
    var color = 'linear-gradient(90deg, #007aff ' + x + '%, #d9dde0 ' + x + '%)';
    slider.style.background = color;
    // console.log(x);
})
slider.oninput = function(){
    output.innerHTML = this.value + " &#8381";
    if(this.value >= 0){
        possibility.innerHTML = " 98%";
    }
    if(this.value >= 18000){
        possibility.innerHTML = " 87%";
    }
    if(this.value >= 38000){
        possibility.innerHTML = " 83%";
    }
    if(this.value >= 52000){
        possibility.innerHTML = " 76%";
    }
}

