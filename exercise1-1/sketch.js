function setup() {
    createCanvas(400, 400);
    noStroke();
    fill(255, 0, 150);
    background(0);
}

function draw() {
    if (mouseIsPressed) {
        circle(random(width), random(height), random(width) / 5);
    }  
    if (keyIsPressed) {
        background (0); 
    }
    
    random(min, max)
    


}