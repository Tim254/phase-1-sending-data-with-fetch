// Add your code here
const submitData = (name , email) => {
const userInfo = {
    name: name,
    email: email,
};


// const configObject = 


return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
        "content-Type": "application/json",
        Accept: "application/json",
    },
    body: JSON.stringify(userInfo)
})
.then(function(response) {
    response.json()
})
.then(function (object){
    document.body.innerHTML = object.id
})
.catch(err => {
        
    document.body.innerHTML = err.message
})
}