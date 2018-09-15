var myHeading = document.querySelector("h1");
myHeading.textContent = 'Hello World';

myHeading.onclick = function() {
    alert('Ouch! Stop poking me..');
}


var myImage;
myImage = document.querySelector("img");
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === "images/firefox-icon.jpg") {
        myImage.setAttribute("src", "images/twitter-icon.jpg");

    } else {
        myImage.setAttribute("src", "images/firefox-icon.jpg");
    }
}

var myButton = document.querySelector("button");

function setUsername() {
    var myName = prompt("Please enter your name:");
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool,' + myName;
    if (!localStorage.getItem('name')) {
        setUsername();
    } else {
        myHeading.textContent = 'Mozilla is cool, ' + storedName;
    }
}
myButton.onclick = function() {
    setUsername();
}