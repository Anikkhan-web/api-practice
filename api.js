// function loadData(){
//    fetch('https://jsonplaceholder.typicode.com/todos/1')
//    .then(res => res.json())
//    .then(data => console.log(data))


// }

// function loadUser(){
// fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())
// .then(data => displayUsers(data))


// }


// function loadPost(){
//    fetch('https://jsonplaceholder.typicode.com/posts')
//    .then(res => res.json())
//    .then(data => console.log(data))
   
//    }
 

//    function displayUsers(data){
//          const ul = document.getElementById('users')
            
//          for (const user of data){
//          // console.log(user)
//             const li = document.createElement('li')
//             li.innerText = `name:  ${  user.name}     email:     ${user.email}`
//             ul.appendChild(li);


//       }
//     }
    

//     function toDosApp(){
//        fetch('https://jsonplaceholder.typicode.com/todos')
//        .then(res=>res.json())
//        .then(data =>loadToDosApp(data))
       
//     }
  //   function loadToDosApp(to){
  //      const ul = document.getElementById('users')
  //      for(const title of to){
  //        console.log(title)
  //        const div = document.createElement('div')
  //        div.classList.add('custom')
  //        div.innerHTML = `
  //        <h3>${title.title}</h3>
  //         <p>${title.id}</p> `
  //        ul.appendChild(div);

  //      }
      
  //  }


   function toDosApp(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(data =>loadToDosApp(data) )

       }

  function loadToDosApp(photos){
       const con = document.getElementById('users')
       for(const photo of photos){
         const div = document.createElement('div') 
         div.innerHTML = `    
      <div class="col" ><img  src="${photo.thumbnailUrl}" ></div>
         `
         con.appendChild(div);
       }     
   }

   
// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));


//   function 