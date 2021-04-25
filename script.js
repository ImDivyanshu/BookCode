// fetch("https://localhost:44363/api/student").
//     then(response => response.json())
//         .then(json => {       
//             console.log(json);
//             let li = `<tr><th>Id</th><th>FirstName</th><th>LastName</th><th>Address</th><th>City</th></tr>`;
//             json.forEach(user => {
//                 console.log(user);
//             li += `<tr>
//             <td>${user.id} </td>
//             <td>${user.firstName} </td>
//             <td>${user.lastName} </td>
//             <td>${user.address}</td> 
//             <td>${user.city} </td>
//             </tr>`;
            
//     });
//     document.getElementById("users").innerHTML = li;
// });


fetch('https://localhost:44363/api/student',{
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer'
}
)
.then(res => res.json())
.then(data => {
    let li = "";
            data.forEach(TempUser => {
               // console.log(user);
            li += `<tr>
            <td>${TempUser.id} </td>
            <td><input type="text" value="${TempUser.firstName}" id="first_name" /> </td>
            <td><input type="text" value="${TempUser.lastName}" id="last_name"/> </td>
            <td><input type="text" value="${TempUser.address}" id="address_details"/></td> 
            <td><input type="text" value="${TempUser.city}" id="city_details" /> </td>
          <td>  <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
               
            <div  class="btn-group me-2" role="group" aria-label="Second group">
 <button type="button" class="btn btn-success" data-toggle="modal" data-target="#myModal" onclick="update(${TempUser.id})" >Update</button>
              
            </div>
            <div class="btn-group" role="group" aria-label="Third group">
              <button type="button" class="btn btn-danger" onclick="deleteUser(${TempUser.id})" >Delete</button></td>
            </tr>`;
    });
    document.getElementById("userTable").innerHTML = li;
    
  // do something with data
  console.log(data);
})
.catch(function(error) {
  console.log('Looks like there was a problem: \n', error);
});



function addUser(){
    var TempFname=document.getElementById("fname");
    var TempLname=document.getElementById("lname");
    var TempAddress=document.getElementById("address");
    var TempCity=document.getElementById("city");
    var TempUser={
        "FirstName":TempFname.value,
        "LastName":TempLname.value,
        "Address":TempAddress.value,
        "City":TempCity.value
    }
    console.log(TempUser);
    fetch("https://localhost:44363/api/student", {
    method: "POST",
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(TempUser)
})
//.then(response => response.json())
.then(result => {
    console.log(result);}
    );
}

// const updateUser = {
//   method: 'PUT', // Method itself
//   headers: {
//    'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
//   },
//   body: JSON.stringify(someData) // We send data in JSON format
//  }
 
//  var url = "https://localhost:44363/api/student/" + id.toString();
//  // make the HTTP put request using fetch api
//  fetch(url, putMethod)
//  .then(response => response.json())
//  .then(data => console.log(data)) 
//  .catch(err => console.log(err)) 

//  const someData = {
//   FirstName: document.getElementById("first_name").value,
//   LastName: document.getElementById("last_name").value,
//   Address: document.getElementById("address_details").value,
//   City: document.getElementById("city_details").value,
//  }



  //   function updateUser(id) {​​​​​​​
  // var TempFname = document.getElementById("first_name");
  // var TempLname = document.getElementById("last_name");
  // var TempAddress = document.getElementById("address_details");
  // var TempCity = document.getElementById("city_details");
  // var TempUser = {​​​​​​​
  //   FirstName: TempFname.value,
  //   LastName: TempLname.value,
  //   Address: TempAddress.value,
  //   City: TempCity.value,
  // }​​​​​​​;
  // console.log(TempUser);
  // var urlUpdate = "https://localhost:44363/api/student/" + id.toString();
  // console.log(urlUpdate);
  // fetch(urlUpdate, {​​​​​​​
  //   method: "PUT",
  //   mode: "cors", // no-cors, *cors, same-origin
  //   cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
  //   credentials: "same-origin", // include, *same-origin, omit
  //   headers: {​​​​​​​
  //     "Content-Type": "application/json",
  //     // 'Content-Type': 'application/x-www-form-urlencoded',
  //   }​​​​​​​,
  //   redirect: "follow", // manual, *follow, error
  //   referrerPolicy: "no-referrer",
  //   body: JSON.stringify(TempUser),
  // }​​​​​​​)
  //   //.then(response => response.json())
  //   .then((result) => {​​​​​​​
  //     console.log(result);
  //   }​​​​​​​);
//}​​​​​​​





function update(ids)
{
    
    var TempFname = document.getElementById("first_name");
  var TempLname = document.getElementById("last_name");
  var TempAddress = document.getElementById("address_details" );
  var TempCity = document.getElementById("city_details");
  var TempUser = {
    FirstName: TempFname.value,
    LastName: TempLname.value,
    Address: TempAddress.value,
    City: TempCity.value,
  };
  console.log(TempUser);
  var urlUpdate = "https://localhost:44363/api/student/" + ids.toString();
  console.log(urlUpdate);
  console.log(TempUser);
  fetch(urlUpdate, {
    method: "PUT",
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer",
    body: JSON.stringify(TempUser),
  })
    //.then(response => response.json())
    .then((result) => {
      console.log(result);
    });
}


function deleteUser(id){
console.log(id.toString());
var urlDelete = "https://localhost:44363/api/student/" + id.toString();
console.log(urlDelete);
fetch(urlDelete,{
  method: "DELETE",
  mode: "cors",
  cache: 'no-cache', 
    credentials: 'same-origin',
    headers:{
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referredPolicy: "no-referrer",
})
.then((result)=>{
  console.log(result);
})
}





// fetch('https://localhost:44363/api/student',{
//     mode: 'cors', // no-cors, *cors, same-origin
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'same-origin', // include, *same-origin, omit
//     headers: {
//       'Content-Type': 'application/json'
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: 'follow', // manual, *follow, error
//     referrerPolicy: 'no-referrer'
// }
// )
// .then(res => res.json())
// .then(data => {
//     let li = "";
//             data.forEach(TempUser => {
//                // console.log(user);
//             li += `<tr>
//             <td>${TempUser.id} </td>
//             <td>${TempUser.firstName} </td>
//             <td>${TempUser.lastName} </td>
//             <td>${TempUser.address}</td> 
//             <td>${TempUser.city} </td>
//           <td>  <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
               
//             <div  class="btn-group me-2" role="group" aria-label="Second group">
//               <button type="button" class="btn btn-success" data-toggle="modal" data-target="#myModal" onclick="updateUser(${TempUser.id})" >Update</button>
              
//             </div>
//             <div class="btn-group" role="group" aria-label="Third group">
//               <button type="button" class="btn btn-danger" onclick="deleteUser(${TempUser.id})" >Delete</button></td>
//             </tr>`;
//     });
//     document.getElementById("userTable").innerHTML = li;
    
//   // do something with data
//   console.log(data);
// })
// .catch(function(error) {
//   console.log('Looks like there was a problem: \n', error);
// });
