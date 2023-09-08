var bodyElement = document.querySelector("body");

var titleElement = document.createElement("title");
titleElement.textContent = "Doh - Title";
bodyElement.appendChild(titleElement);

var h1Element = document.createElement("h1");
h1Element.textContent = "Heading element info stuff";
bodyElement.appendChild(h1Element);

var pElement = document.createElement("p");
pElement.textContent = "Here's the paragraph";
bodyElement.appendChild(pElement);

var pElement2 = pElement.cloneNode(true);
bodyElement.appendChild(pElement2);

console.log("it works");