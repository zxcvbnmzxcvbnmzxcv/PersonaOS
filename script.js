function updateTime() {
    var currentTime = new Date().toLocaleString();
    var timeText = document.querySelector("#timeElement");
    timeText.innerHTML = currentTime;
}
setInterval(updateTime, 1000);







dragElement(document.getElementById("window"));

function dragElement(element) {
  
  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;

  
  if (document.getElementById(element.id + "header")) {
    
    document.getElementById(element.id + "header").onmousedown = startDragging;
  } else {
    
    element.onmousedown = startDragging;
  }

  
  function startDragging(e) {
    e = e || window.event;
    e.preventDefault();
    
    initialX = e.clientX;
    initialY = e.clientY;
    
    document.onmouseup = stopDragging;
    document.onmousemove = dragElement;
  }

  
  function dragElement(e) {
    e = e || window.event;
    e.preventDefault();
    
    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;
    
    element.style.top = (element.offsetTop - currentY) + "px";
    element.style.left = (element.offsetLeft - currentX) + "px";
  }

  
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

function handleIconTap(element,screen) {
  if (element.classList.contains("selected")) {
    deselectIcon(element)
    openWindow(screen)
  } else {
    selectIcon(element)
  }
}

dragElement(document.querySelector("#bear"))

var bearIcon = document.querySelector("#bearopen"); 
var bearScreen = document.querySelector("#bear")
var windowsScreen = document.querySelector("#windows")
var bearScreenClose = document.querySelector("#bearclose")
bearScreenClose.addEventListener("click", () => closeWindow(bearScreen));
var backgroundsScreen = document.querySelector("#backgrounds")
var backgroundsScreenClose = document.querySelector("#backgroundsclose")
backgroundsScreenClose.addEventListener("click", () => closeWindow(backgroundsScreen));


var morganaScreen = document.querySelector("#morgana");
var morganaScreenClose = document.querySelector("#morganaclose");
morganaScreenClose.addEventListener("click", () => closeWindow(morganaScreen));
dragElement(morganaScreen);
addWindowTapHandling(morganaScreen);




initializeWindow("browser")
initializeIcon("browser")
document.querySelector("#browserclose").addEventListener("click", () => closeWindow(document.querySelector("#browser")));

function searchWikipedia() {
  var query = document.querySelector("#wikipediaSearchInput").value;
  if (query.trim() === "") return;
  var frame = document.querySelector("#wikipediaFrame");
  frame.src = "https://en.wikipedia.org/wiki/Special:Search?search=" + encodeURIComponent(query) + "&go=Go";
}

document.querySelector("#wikipediaSearchButton").addEventListener("click", searchWikipedia);
document.querySelector("#wikipediaSearchInput").addEventListener("keydown", function(e) {
  if (e.key === "Enter") searchWikipedia();
});

initializeWindow("calendar")
initializeIcon("calendar")
document.querySelector("#calendarclose").addEventListener("click", () => closeWindow(document.querySelector("#calendar")));



initializeWindow("paint")
initializeIcon("paint")
document.querySelector("#paintclose").addEventListener("click", () => closeWindow(document.querySelector("#paint")));



initializeWindow("banjo")
initializeIcon("banjo")
document.querySelector("#banjoclose").addEventListener("click", () => closeWindow(document.querySelector("#banjo")));







var biggestIndex = 1;

function addWindowTapHandling(element) {
  element.addEventListener("mousedown", () =>
    handleWindowTap(element)
  )
}

addWindowTapHandling(window)
addWindowTapHandling(bearScreen)
addWindowTapHandling(backgroundsScreen)
dragElement(backgroundsScreen)

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
  dragElement(screen)
}

function initializeIcon(name) {
var icon = document.querySelector("#" + name + "open")
var screen = document.querySelector("#" + name)
icon.addEventListener("click", () => handleIconTap(icon, screen));
}
initializeIcon("bear")
initializeIcon("backgrounds")
initializeIcon("morgana")



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


var backgroundsContent = [];

for (let i = 1; i<=15;i++){
  var filename = "coolbackgrounds/background" + i + ".png";
  backgroundsContent.push({
    title: "Background " + i,
    date: "",
    content: `
    <img src="${filename}" style="width: 100%;border-radius:12px;">
    <br><br>
    <button style="font-family:'personafont';font-size:85px"class = "choose-bg" data-image = "${filename}">Choose</button>
    
    `
  })



}

function setbackgroundscontent(index){
  var backgroundspageContent = document.querySelector("#backgroundspageContent");
  backgroundspageContent.innerHTML = backgroundsContent[index].content;

  currentBackgroundsPage = index;
  
  var chooseButton = backgroundspageContent.querySelector(".choose-bg");
  chooseButton.addEventListener("click",function() {
    var imageFile = chooseButton.getAttribute("data-image")
    document.body.style.backgroundImage = "url(" + imageFile + ")";
  });


}

function addToBackgroundsSideBar(index) {
  var sidebar = document.querySelector("#backgroundssidebar");
  var bg = backgroundsContent[index];

  var newDiv = document.createElement("div");
  newDiv.style.cursor = "pointer";
  newDiv.style.padding = "8px";
  newDiv.style.marginBottom = "8px";

  newDiv.style.backgroundColor = "#ffff";
  newDiv.style.border = "5px solid black";

  newDiv.innerHTML = `<p style="margin: 0px; font-weight: bold; font-size: 14px;">${bg.title}</p>`;

  newDiv.addEventListener("click", function() {
    setbackgroundscontent(index);
  });
    sidebar.appendChild(newDiv);
}


for (let i = 0; i < backgroundsContent.length; i++) {
  addToBackgroundsSideBar(i);
}
setbackgroundscontent(0);

var currentBackgroundsPage = 0;
function flipBackgroundsPage() {
  var nextIndex = currentBackgroundsPage + 1;
  if (nextIndex >= backgroundsContent.length) nextIndex = 0;
  setbackgroundscontent(nextIndex);
  currentBackgroundsPage = nextIndex;
}
document.querySelector("#backgroundsnextPageButton").addEventListener("click", flipBackgroundsPage);




















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
  newDiv.style.padding = "6px";
  newDiv.style.marginBottom = "8px";
  newDiv.style.backgroundColor = "#ffff";
  newDiv.style.border = "5px solid black";
 
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

var morganaCount = 0;

var morganaClicker = document.querySelector("#morganaClicker");
var morganaCountDisplay = document.querySelector("#morganaCount");
var Mona = document.querySelector("#morganamessage");

morganaClicker.addEventListener("click",function(){
  morganaCount++;
  morganaCountDisplay.textContent = morganaCount;

  var random5 = Math.floor(Math.random()*15)+1;

  morganaClicker.src = "morganapics/morgana" + random5 +".jpeg"


  if(morganaCount <5){Mona.textContent = "Noob clicker.";
  }
  else if (morganaCount < 20)
    {Mona.textContent = "Go to SLEEP";
  }
  else if (morganaCount < 80)
    {Mona.textContent = "Not a Cat";
  }
  else if (morganaCount < 140)
    {Mona.textContent = "Advanced Clicker";
  }
  else if (morganaCount < 220)
    {Mona.textContent = "Meow";
  }
  else if (morganaCount < 270)
    {Mona.textContent = "PERSONA";
  }
  else if (morganaCount < 340)
    {Mona.textContent = "Pro Clicker";
  }
  else if (morganaCount < 390)
    {Mona.textContent = "God Clicker";
  }
  else if (morganaCount < 460)
    {Mona.textContent = "Epic Clicker";
  }
  else if (morganaCount < 600)
    {Mona.textContent = "Morgana Fan";
  }
  else if (morganaCount < 700)
    {Mona.textContent = "Morgana Lover";
  }
  else if (morganaCount < 850)
    {Mona.textContent = "Morgana Pro";
  }
  else if (morganaCount < 1000)
    {Mona.textContent = "Morgana Obsessed";
  }




});






// Calendar
var calendarMonthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var calendarWeekdayLabels = ["S","M","T","W","T","F","S"];

var calendarMonths = [];

for(var cy = 2026;cy<= 2028;cy++){
  for(var cm = 0; cm<= 11;cm++){
    calendarMonths.push({ year: cy, month: cm})
  }
}

function buildMonthGridHTML(year,month){
  var today = new Date();
  var isCurrentMonth = (today.getFullYear() === year && today.getMonth() === month);
  var todayDate = today.getDate();

  var firstWeekday = new Date(year, month, 1).getDay();
  var daysInMonth = new Date(year, month + 1, 0).getDate();

  var html = `<h2 style="font-family:'personafont';font-size:45px;margin:0 0 8px 0;text-align:center;">${calendarMonthNames[month]} ${year}</h2>`;

  html += `<div style="display:grid;grid-template-columns:repeat(7,1fr);text-align:center;font-size:12px;color:#666;margin-bottom:4px;">`;
  calendarWeekdayLabels.forEach(function(d) { html += `<div>${d}</div>`; });
  html += `</div>`;

  html += `<div style="display:grid;grid-template-columns:repeat(7,1fr);grid-auto-rows:65px;gap:4px;">`;

  for (var i = 0; i < firstWeekday; i++) {
    html += `<div></div>`;
  }

  for (var day = 1; day <= daysInMonth; day++) {
    var isToday = isCurrentMonth && day === todayDate;
    var bg = isToday ? "#ff0000" : "#000000";
    var color = isToday ? "white" : "white";
    var fontWeight = isToday ? "bold" : "normal";
    html += `<div style="display:flex;align-items:center;justify-content:center;font-family:'personafont';font-size:25px;background-color:${bg};color:${color};font-weight:${fontWeight};">${day}</div>`;
  }

  html += `</div>`;
  return html;
}


var calendarContent = calendarMonths.map(function(m) {
  return {
    title: calendarMonthNames[m.month] + " " + m.year,
    date: "",
    content: buildMonthGridHTML(m.year, m.month)
  };
});

var currentCalendarPage = 0;

function setCalendarPageContent(index) {
  var calendarPageContent = document.querySelector("#calendarpageContent");
  calendarPageContent.innerHTML = calendarContent[index].content;
  currentCalendarPage = index;
}

function addToCalendarSideBar(index) {
  var sidebar = document.querySelector("#calendarsidebar");
  var m = calendarContent[index];
  var monthInfo = calendarMonths[index];

  var today = new Date();
  var isCurrentMonth = (monthInfo.year === today.getFullYear() && monthInfo.month === today.getMonth());


  var newDiv = document.createElement("div");
  newDiv.style.cursor = "pointer";
  newDiv.style.padding = "8px";
  newDiv.style.marginBottom = "8px";
  newDiv.style.backgroundColor = isCurrentMonth ? "#ff0000" : "#f2f2f2";
  newDiv.style.fontSize = "13px";
  newDiv.style.fontFamily = 'personafont';

  newDiv.style.border = "5px solid black";

  var shortYear = "'" + String(monthInfo.year).slice(-2);
  var shortLabel = calendarMonthNames[monthInfo.month].slice(0, 3) + " " + shortYear;
  newDiv.innerHTML = `<p style="margin: 0px; font-weight: bold; font-size: 22px;">${shortLabel}</p>`;

  newDiv.addEventListener("click", function() {
    setCalendarPageContent(index);
  });

  sidebar.appendChild(newDiv);
}

for (var ci = 0; ci < calendarContent.length; ci++) {
  addToCalendarSideBar(ci);
}

(function openOnTodaysMonth() {
  var today = new Date();
  var idx = calendarMonths.findIndex(function(m) {
    return m.year === today.getFullYear() && m.month === today.getMonth();
  });
  setCalendarPageContent(idx >= 0 ? idx : 0);
})();

function flipCalendarPage() {
  var nextIndex = currentCalendarPage + 1;
  if (nextIndex >= calendarContent.length) nextIndex = 0;
  setCalendarPageContent(nextIndex);
}
document.querySelector("#calendarnextPageButton").addEventListener("click", flipCalendarPage);

var paintCanvas = document.querySelector("#paintCanvas");
var paintCtx = paintCanvas.getContext("2d");
var paintColorInput = document.querySelector("#paintColor");
var paintBrushSizeInput = document.querySelector("#paintBrushSize");
var isPainting = false;
var lastX = 0;
var lastY = 0;

function getCanvasCoords(e){
  var rect = paintCanvas.getBoundingClientRect();
  return{
     x: (e.clientX - rect.left) * (paintCanvas.width / rect.width),
    y: (e.clientY - rect.top) * (paintCanvas.height / rect.height)
  };
}

paintCanvas.addEventListener("mousedown",function(e){
  isPainting = true;
  var pos = getCanvasCoords(e);
  lastX = pos.x;
  lastY = pos.y;

});

paintCanvas.addEventListener("mousemove",function(e){
  if(!isPainting) return;
  var pos = getCanvasCoords(e);
  paintCtx.strokeStyle = paintColorInput.value;
  paintCtx.lineWidth = paintBrushSizeInput.value;
  paintCtx.lineCap = "round";
  paintCtx.beginPath();
  paintCtx.moveTo(lastX, lastY);
  paintCtx.lineTo(pos.x, pos.y);
  paintCtx.stroke();
  lastX = pos.x;
  lastY = pos.y;
});


window.addEventListener("mouseup", function() {
  isPainting = false;
});

document.querySelector("#paintClear").addEventListener("click", function() {
  paintCtx.clearRect(0, 0, paintCanvas.width, paintCanvas.height);
});
















