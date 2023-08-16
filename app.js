

let btn = document.querySelector("#button");
let input = document.querySelector("#input");
let arr = [];
let todo = document.querySelector("#todolist")


btn.onclick = function () {
    arr.push(input.value)
    input.value = ""
    appendList()
}

// Here i am appending the input in a new box to show in the display

function appendList(){
todo.innerHTML = null;
    for(let i=0;i<arr.length;i++){
        // let newList = document.createElement("li")
        // newList.innerText = arr[i]
        // todo.append(newList)

        // todo.innerHTML+="<li>" + arr[i] + "</li>"

        todo.innerHTML += `<li> ${arr[i]} <a onclick=edit(${i})>Edit</a> <a onclick=del(${i})>x  |</a> </li>`
    }
}

// Edit function

function edit(index) {
    let text = prompt("Edit here!");
    if (text !== null) {
        if (text !== "") {
            arr[index] = text;
            appendList();
        } else {
            alert("Cannot be empty");
        }
    } else {
        // User cancelled the prompt
    }
}


// function delete ()

function del(i){
    let text = confirm("Do you want to delete this ")
    if (text) {
        arr.splice(i,1)
        appendList()
    }
}
