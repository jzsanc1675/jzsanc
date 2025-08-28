function playSound(url) {
    var a = new Audio(url);
    a.play();
}

var sounds = [
'sounds/buddy.ogg'
]

document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    playSound(sounds[(Math.floor(Math.random() * sounds.length))])

    const newImage = document.createElement('img');
    newImage.src = 'images/dude.png'; // Replace with your image source

    // Generate random rotation (between 0 and 360 degrees)
    const rotation = Math.random() * 360;

    // Apply random rotation
    newImage.style.transform = `rotate(${rotation}deg)`;

    // Set the initial opacity to 1
    newImage.style.opacity = 1;

    // Set the image position at the mouse coordinates
    newImage.style.position = 'absolute';
    newImage.style.left = event.clientX + 'px';
    newImage.style.top = event.clientY + 'px';
    // add this style property transition: opacity 1s, transform 1s;
    newImage.style.transition = 'opacity 1s, transform 1s';

    // Add the image to the body of the HTML
    document.body.appendChild(newImage);

    // Gradually reduce opacity and size over 1 second
    setTimeout(() => {
        newImage.style.opacity = 0;
        newImage.style.transform = `scale(0) rotate(${rotation}deg)`;
    }, 250); // Delay is needed for the transition to take effect

    // Remove the image element from the DOM after 1 second
    setTimeout(() => {
        document.body.removeChild(newImage);
    }, 1000);
});