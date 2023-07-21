




var bookArray = []

if(localStorage.getItem('users')!=null){
    bookArray = JSON.parse(localStorage.getItem('users'))
    displayUsers()
}



function addBook() {
    var bookName = document.getElementById('bookName').value
    var bookurl = document.getElementById('bookurl').value

    var bookObject = {
        name : bookName,
        url : bookurl,
    }

     console.log(bookObject);


    bookArray.unshift(bookObject)

    localStorage.setItem('users',JSON.stringify(bookArray))
    
    displayUsers()
  
}

function displayUsers(){
    var cartona = ``
    for(var i=0; i<bookArray.length;i++){
        cartona+=`
        <tr>
        <td>${bookArray[i].name}</td>
        <td>${bookArray[i].url}</td>
        <th><button onclick="vis(${i})" class="btn btn-primary">visit</button></th>
        <th><button onclick="delUser(${i})" class="btn btn-primary">delete</button></th>
    </tr>
        `
    }

document.getElementById('demo').innerHTML=cartona

     
} 


function delUser(index){
    bookArray.splice(index,1)
    localStorage.setItem('users',JSON.stringify(bookArray))

    displayUsers()
}


function vis(index){
    bookArray.reverse(index,1)
    localStorage.setItem('users',JSON.stringify(bookArray))
    displayUsers()
}