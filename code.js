let boxClickCount = 0;
let clickCount = 0;
document.addEventListener("click", start);

function start() {
  clickCount += 1;

  const div = document.getElementById("box");
  console.log(div);
  if (div === null) {
    console.log("object");
    const divOuter = document.createElement("div");
    divOuter.setAttribute("id", "box");
    divOuter.style.boxSizing = "border-box";
    divOuter.style.width = "500px";
    divOuter.style.height = "500px";
    divOuter.style.background = "orange";
    divOuter.style.boxShadow = "15px 13px 0 0 red";
    document.body.appendChild(divOuter);
    divOuter.addEventListener("click", show);
    document.addEventListener("click", hide);
    console.log(clickCount);
  }
}

function show() {
  boxClickCount += 1;
  console.log("boxClickCount", boxClickCount);
  const para = document.getElementById("para");
  const divOuter = document.getElementById("box");

  if (boxClickCount % 2 === 0) {
    para.remove();
    divOuter.style.boxShadow = "15px 13px 0 0 red";
  }

  if (!para) {
    const divOuter = document.getElementById("box");
    divOuter.style.boxShadow = "0px 0px 0px 20px red";

    let para = document.createElement("p");
    para.setAttribute("id", "para");
    para.innerText = "Box hovering effect";
    para.style.boxSizing = "border-box";
    para.style.width = "250px";
    para.style.height = "250px";
    para.style.backgroundColor = "pink";
    divOuter.style.paddingTop = "125px";
    para.style.marginLeft = "auto";
    para.style.marginRight = "auto";
    para.style.textAlign = "center";
    para.style.paddingTop = "100px";
    console.log(para);
    divOuter.appendChild(para);
  }
}

function hide(e) {
  if (e.target.id !== "para" && e.target.id !== "box" && clickCount % 2 === 1) {
    const divOuter = document.getElementById("box");
    divOuter.remove();
  }
}
