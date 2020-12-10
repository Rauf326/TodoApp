var list = document.getElementById("list")


function addtask(){
    var todoitem = document.getElementById("todoapp");
    var todolist = document.createElement("li");
    var todolistname = document.createTextNode(todoitem.value)
    todolist.appendChild(todolistname)
   

    var btn = document.createElement("button");
    var btntext = document.createTextNode("Edit");
    btn.setAttribute("class" , "btn")
    btn.setAttribute("onclick","editbutton(this)")
    btn.appendChild(btntext);
    todolist.appendChild(btn)
   

    var dltbtn = document.createElement("button");
    var dltbtntext = document.createTextNode("Delete it")
    dltbtn.appendChild(dltbtntext)
    dltbtn.setAttribute("class" ,"btn")
    dltbtn.setAttribute("onclick","delbut(this)")
    todolist.appendChild(dltbtn)



    list.appendChild(todolist)
    todoitem.value = ""
}

 
function delbut (a){
    a.parentNode.remove()
    }

function deleteall(){
    list.innerHTML= ""
}


const editbutton = (e) =>{
    var inp=prompt("Enter Edit Value")
e.parentNode.firstChild.nodeValue=inp
}
