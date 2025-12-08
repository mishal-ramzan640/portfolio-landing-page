let skillset= document.getElementById("skill-list");
let input= document.getElementById("skill-input");
let btn=document.getElementById("add-btn");

btn.addEventListener("click", function(){
    let skill=input.value.trim();
    if (skill===""){
        alert("Please Enter a Skill");
            return;
    }
    let li=document.createElement("li");

    li.innerHTML =` 
    ${skill}
    <button class="delete-btn" >DELETE</button>
    `;
    skillset.appendChild(li);
    input.value= "";
})
skillset.addEventListener("click", function(e){
    if(e.target.classList.contains("delete-btn")){
        e.target.parentElement.remove();
    }
});