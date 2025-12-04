let skills=[ "HTML", "CSS", "JAVASCRIPT", "C++"];
let list= document.getElementById("skill-list");
let projects=["digital library","object detection", "billing system"]
let list2=document.getElementById("project");

for(let skill of skills){
    let li=document.createElement("li");
    li.textContent =skill;
    list.appendChild(li);
}
for (let project of projects){
    let li=document.createElement("li");
    li.textContent=project;
    list2.appendChild(li);
}