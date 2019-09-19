import "./styles.css";

document.getElementById("good").addEventListener("submit", function(event) {
  event.preventDefault();

  var formval = document.getElementById("formval").value;
  var div = document.createElement("div");
  var div1 = document.createElement("div1");
  var text = document.createTextNode(formval);
  var linebreak = document.createElement("br");

  div.appendChild(text);
  document.getElementById("app").appendChild(div);

  if (formval === "p") {
    var projects = document.createTextNode("Project 1");

    div1.appendChild(projects);
    div1.appendChild(linebreak);

    projects = document.createTextNode("Project 2");
    div1.appendChild(projects);
    div1.appendChild(linebreak);
    document.getElementById("formval").value = "";

    div1.appendChild(projects);
    document.getElementById("app").appendChild(div1);
  }

  document.getElementById("formval").value = "";
});
