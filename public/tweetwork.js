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
    
    if(evt.keyCode === 13){
        findMovie(textBox.value);
    }
    console.log("key pressed");
};

function findMovie(title){
    var xhttp= new XMLHttpRequest();
    xhttp.onreadystatechange= function(){
        if(this.readyState === 4 && this.status === 200){
            var data = JSON.parse(this.responseText);
            displayMovieInfo(data);
            console.log(data);
        }
    };
    xhttp.open("GET", "http://www.omdbapi.com/?t="+title+"&y=&plot=short&r=json",true);
    xhttp.send();
}

function loginUser(name) { 
     var xhttp = new XMLHttpRequest(); 
     xhttp.onreadystatechange = function () { 
 
        if (this.readyState === 4 && this.status === 200) { 
            var data = JSON.parse(this.responseText); 
            console.log(data); 
        //  printUserId(data, name); 
        } 
    }; 
    xhttp.open("GET", "/timeline/" + name, true); 
    xhttp.send(); 
} 
