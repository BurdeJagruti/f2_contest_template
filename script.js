

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {

arr.map((value)=>{
  if(value.profession=="developer"){
    console.log(value)
  }
})
}

function PrintDeveloperbyForEach() { 
arr.forEach(function(value){
  if(value.profession=="developer"){
    console.log(value)
  }
})
}

function addData() {
  let newobj={ id: 4, name: "johny", age: "28", profession: "Analyst" }
  arr.push(newobj)
  console.log(arr)
}

function removeAdmin() {
  arr.filter((arr)=>{
    if(arr.profession!="admin"){
      console.log(arr)
    }
  })
}
function concatenateArray() {
  let newArr=  [{ id: 5, name: "karen", age: "19", profession: "Software Engineer" },
  { id: 6, name: "karen", age: "19", profession: "Software Engineer" },
  { id: 7, name: "karen", age: "19", profession: "admin" }
]
  console.log(arr.concat(newArr))
}
