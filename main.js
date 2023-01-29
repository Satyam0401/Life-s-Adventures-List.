//Functionality
//Add item
//Delete item
//Search item
let form = document.getElementById("addForm")
let itemsList = document.getElementById("items")
let filter = document.getElementById("filter")


form.addEventListener("submit",function(e){
    e.preventDefault()
let item = document.getElementById("item").value
//console.log(item)
let li = document.createElement("li")
//console.log(li)
li.appendChild(document.createTextNode(item))
li.className = "list-group-item"
itemsList.appendChild(li)
 let btn = document.createElement("button")
 btn.appendChild(document.createTextNode("X"))
 li.appendChild(btn)
btn.className = "btn btn-danger btn-sm float-right delete"
document.getElementById("item").value = ''

})


itemsList.addEventListener("click",function(e){
    if(e.target.classList.contains("delete")){
    //console.log("jcxkxj")
    if(confirm("are u sure u want to delete this item")){
    itemsList.removeChild(e.target.parentElement)
    }}
    else{
    alert("chla ja b....")
    }
})


 filter.addEventListener("keypress",function(e){
    console.log(e.target.value)
 })