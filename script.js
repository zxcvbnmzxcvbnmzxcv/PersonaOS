function updateTime() {
    var currentTime = new Date().toLocaleString();
    var timeText = document.querySelector("#timeElement");
    timeText.innerHTML = currentTime;
}
setInterval(updateTime, 1000);







dragElement(document.getElementById("window"));

function dragElement(element) {
  // Step 2: Set up variables to keep track of the element's position.
  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;

  // Step 3: Check if there is a special header element associated with the draggable element.
  if (document.getElementById(element.id + "header")) {
    // Step 4: If present, assign the `dragMouseDown` function to the header's `onmousedown` event.
    // This allows you to drag the window around by its header.
    document.getElementById(element.id + "header").onmousedown = startDragging;
  } else {
    // Step 5: If not present, assign the function directly to the draggable element's `onmousedown` event.
    // This allows you to drag the window by holding down anywhere on the window.
    element.onmousedown = startDragging;
  }

  // Step 6: Define the `startDragging` function to capture the initial mouse position and set up event listeners.
  function startDragging(e) {
    e = e || window.event;
    e.preventDefault();
    // Step 7: Get the mouse cursor position at startup.
    initialX = e.clientX;
    initialY = e.clientY;
    // Step 8: Set up event listeners for mouse movement (`elementDrag`) and mouse button release (`closeDragElement`).
    document.onmouseup = stopDragging;
    document.onmousemove = dragElement;
  }

  // Step 9: Define the `elementDrag` function to calculate the new position of the element based on mouse movement.
  function dragElement(e) {
    e = e || window.event;
    e.preventDefault();
    // Step 10: Calculate the new cursor position.
    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;
    // Step 11: Update the element's new position by modifying its `top` and `left` CSS properties.
    element.style.top = (element.offsetTop - currentY) + "px";
    element.style.left = (element.offsetLeft - currentX) + "px";
  }

  // Step 12: Define the `stopDragging` function to stop tracking mouse movement by removing the event listeners.
  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}









var welcomeScreen = document.querySelector("#window")

function closeWindow(element) {
  element.style.display = "none"
}

function openWindow(element) {
  element.style.display = "block"
}


var welcomeScreenClose = document.querySelector("#welcomeclose")

var welcomeScreenOpen = document.querySelector("#welcomeopen")

welcomeScreenClose.addEventListener("click", function() {
  closeWindow(welcomeScreen);
});

welcomeScreenOpen.addEventListener("click", function() {
  openWindow(welcomeScreen);
});







var selectedIcon = undefined



function selectIcon(element) {
  element.classList.add("selected");
  selectedIcon = element
} 

function deselectIcon(element) {
  element.classList.remove("selected");
  selectedIcon = undefined
}

function handleIconTap(element) {
  if (element.classList.contains("selected")) {
    deselectIcon(element)
    openWindow(bearScreen)
  } else {
    selectIcon(element)
  }
}

dragElement(document.querySelector("#bear"))

var bearIcon = document.querySelector("#bearopen"); 

bearIcon.addEventListener("click", function() {
  handleIconTap(bearIcon);
});

var bearScreen = document.querySelector("#bear")

var bearScreenClose = document.querySelector("#bearclose")

bearScreenClose.addEventListener("click", () => closeWindow(bearScreen));

var biggestIndex = 1;

function addWindowTapHandling(element) {
  element.addEventListener("mousedown", () =>
    handleWindowTap(element)
  )
}

addWindowTapHandling(window)
addWindowTapHandling(bearScreen)

var topBar = document.querySelector("#top")

function openWindow(element) {
  element.style.display = "block";
  biggestIndex++;  
  element.style.zIndex = biggestIndex;
  topBar.style.zIndex = biggestIndex + 1;
}

function handleWindowTap(element) {
  biggestIndex++;  
  element.style.zIndex = biggestIndex;
  topBar.style.zIndex = biggestIndex + 1;
  deselectIcon(selectedIcon)
}

function initializeWindow(elementName) {
  var screen = document.querySelector("#" + elementName)
  addWindowTapHandling(screen)
  makeClosable(elementName)
  dragElement(screen)
}




var content = [
  {
    title: "Day 1",
    date: "July 27th, 2026",
    content: `
              <p contenteditable="True">
          <span style="font-family: 'personafont';font-size:35px" contenteditable="false">Day 1: </span> 
            </br>
            </br>
            <img src="coolbear.jpeg" width:"250" height="250">
              
            </br>
            </br>

            This is an app for documenting types of birds (pigeons, eagles) and birds (black bears, brown bears) that you see
            in your life. You can edit the text

        
      `
  },
  {
  title: "Day 2",
  date: "July 28th, 2026",
  content: `
    <p style="font-family: 'personafont';font-size:35px" > Day 2: </p>
    <img src="nest.jpeg" width="250" height="250">
  <p contenteditable="True">
  Saw a birds nest with a dead bird in it.
  </p>


  `

  }
  ,
  {
  title: "Day 3",
  date: "July 29th, 2026",
  content: `
  <p  style="font-family: 'personafont';font-size:35px" > Day 3: </p>
  <img src="blackbear.jpeg"width="250" height="250">
  <p contenteditable="True">
  Saw a black back bear today it was soooo cool.
  </p>
  `

  }
  ,
  {
  title: "Day 4",
  date: "July 30th, 2026",
  content: `
  <p  style="font-family: 'personafont';font-size:35px" > Day 4: </p>
  <img src="sad.jpeg"width="250" height="250">
  <p contenteditable="True">
  Didnt see no bear today
  </p>
  `

  }
  ,
  {
  title: "Day 5",
  date: "July 31th, 2026",
  content: `
  <p  style="font-family: 'personafont';font-size:35px" > Day 5: </p>
  <img src="polarbear.jpeg"width="250" height="250">
  <p contenteditable="True">
  Saw a polar bear today and a parakeet.
  </p>
  `

  }
  ,
  {
  title: "Day 6",
  date: "August 1st, 2026",
  content: `
  <p  style="font-family: 'personafont';font-size:35px" > Day 6: </p>
  <img src="panda.jpeg"width="250" height="250">
  <p contenteditable="True">
  I saw a panda on tv.

  I also saw pigeons outside and a red bird.
  </p>
  `

  }
  ,
  {
  title: "Day 7",
  date: "August 2nd, 2026",
  content: `
  <p  style="font-family: 'personafont';font-size:35px" > Day 7: </p>
  <img src="andeanbear.jpeg"width="250" height="250">
  <p contenteditable="True">
  I saw an andeanbear it was epiccc..

  I love looking at cool bears in the wild.
  </p>
  `

  }

]

function setPageContent(index) {

  var pageContent = document.querySelector("#pageContent")

  pageContent.innerHTML = content[index].content
  currentPage = index;
}
function addToSideBar(index) {
  var sidebar = document.querySelector("#sidebar");
  var note = content[index];
 
  var newDiv = document.createElement("div");
  newDiv.style.cursor = "pointer";
  newDiv.style.padding = "8px";
  newDiv.style.marginBottom = "8px";
  newDiv.style.borderRadius = "8px";
  newDiv.style.backgroundColor = "#f2f2f2";
 
  newDiv.innerHTML = `
    <p style="margin: 0px; font-weight: bold; font-size: 14px;">${note.title}</p>
    <p style="font-size: 11px; margin: 0px; color: #666;">${note.date}</p>
  `;
 
  newDiv.addEventListener("click", function() {
    setPageContent(index);
  });
 
  sidebar.appendChild(newDiv);
}
 
for (let i = 0; i < content.length; i++) {
  addToSideBar(i);
}
setPageContent(0)


var currentPage = 0;

function flipPage(){
  var nextIndex = currentPage + 1;
  if(nextIndex >= content.length){
    nextIndex = 0
  }
  setPageContent(nextIndex);
}

document.querySelector("#nextPageButton").addEventListener("click", flipPage);






