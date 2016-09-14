// var http = new XMLHttpRequest();
// var url = "url";
// var params = JSON.stringify({ appoverGUID: approverGUID });
// http.open("POST", url, true);

// http.setRequestHeader("Content-type", "application/json; charset=utf-8");
// http.setRequestHeader("Content-length", params.length);
// http.setRequestHeader("Connection", "close");

// http.onreadystatechange = function() {
//     if(http.readyState == 4 && http.status == 200) {
//         alert(http.responseText);
//     }
// }
// http.send(params);

var login = document.getElementById("loginButt");

login.onclick = function(){
    var name = document.getElementById("username").value;
    loginUser(name);
};

function displayTweets(data){
    console.log(data);
}

function loginUser(name) { 
     var xhttp = new XMLHttpRequest(); 
     xhttp.onreadystatechange = function () { 
 
        if (this.readyState === 4 && this.status === 200) { 
            var data = JSON.parse(this.responseText); 
            console.log(data); 
            displayTweets(data);
        //  printUserId(data, name); 
        } 
    }; 
    xhttp.open("GET", "/timeline/" + name, true); 
    xhttp.send(); 
} 
