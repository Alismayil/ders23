
let text=document.querySelector('#text')
let btn=document.querySelector('button')
let list=document.querySelector('.todolist')



btn.addEventListener('click',(e)=>{
    e.preventDefault()
    const obj={
        wright: text.value
    }
    localStorage.setItem('send',JSON.stringify(obj))

    let todo=document.createElement('div')
    let check=document.createElement('input')
    check.type='checkbox'
    check.addEventListener('click',(e)=>{
        todo.classList.toggle('line-through')
    })
    todo.classList.add('todo')
    
    todo.textContent=text.value

    list.append(todo)
    todo.append(check)

    text.value=''
    
    
})
let user=JSON.parse(localStorage.getItem('send'))
if(user){
    text.value=user.wright
}


document.body.addEventListener("keypress",function (e) {
    if (e.key==="Enter") {
        btn.click()
    }
})











































// usul1
// localStorage.setItem("name", "Ali");
// localStorage.setItem("surname", "Ismayil");
// localStorage.setItem("username", "Aliko");
// localStorage.setItem("password", "Af104");

// let name = localStorage.getItem("name");
// let surname = localStorage.getItem("surname");
// let username = localStorage.getItem("username");
// let password = localStorage.getItem("password");

// const p = document.createElement("p");
// let body = document.querySelector("body");

// p.innerHTML = `name : ${name} , surname : ${surname} , username : ${username} , password : ${password}`;

// body.append(p);


// usul2 Object

// const myObject = {
//     name: "Ali",
//     surname: "Ismayil",`
//     username: "Aliko",
//     password: "Af104"
//   };

// localStorage.setItem('user',JSON.stringify(myObject))

// let user=JSON.parse(localStorage.getItem('user'))

// const p = document.createElement('p');
// let body = document.querySelector('body');

// p.innerHTML = `name : ${user.name} ,
//  surname : ${user.surname} , username : ${user.username} ,
//   password : ${user.password}`;

// body.append(p);
