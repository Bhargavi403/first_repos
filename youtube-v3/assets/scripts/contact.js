

function handleFormSubmission(event){
  event.preventDefault(); // stopping the page refresh
  console.log("Inside handleFormSubmission");

  // Step 1: read the form data and have the form data in obj format 
  let myFormData = {
    name: document.getElementById("nameInput").value,
    phone: document.getElementById("phoneInput").value,
    email: document.getElementById("emailInput").value
  }
  console.log(myFormData); //submittable form data
  // Step 2: then, submit the form data to the REST API Backend 
      // 2.1 What's the REST API URL? https://jsonplaceholder.typicode.com/users
      // 2.2 What's the HTTP Method? POST 
      // 2.3 What's the form data? myFormData
      // 2.4 What's the REST API Client? fetch  

  let statusEl = document.getElementById("formStatus");
  fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    body: myFormData
  }).then( function(res) { // upon successful -- // Step 3: get the resp and update the UI
    console.log(res);
    if(res.status == 201){
      statusEl.innerText = "Saved Successfully!";
      statusEl.classList.add('alert-success');
    }
  }).catch( function(err){  // upon error 
    statusEl.innerText = "Some error occured !";
    statusEl.classList.add('alert-danger');
    console.log(err);
  }).finally( function() {
    console.log('It is over!')
  });
  
  
}

