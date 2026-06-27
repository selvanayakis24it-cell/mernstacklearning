const button = document.getElementById("getUserBtn");

button.onclick = function () {
    let userId = document.getElementById("username").value;

    fetch("https://jsonplaceholder.typicode.com/users/" + userId)
        .then(res => res.json())
        .then(user => {
            document.getElementById("result").innerHTML =
                "ID: " + user.id + "<br>Name: " + user.name;
        });
};