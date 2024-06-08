var upName = document.getElementById('signupName')
var upEmail = document.getElementById('signupEmail')
var upPassword = document.getElementById('signupPassword')
var inEmail = document.getElementById('signinEmail')
var inPassword = document.getElementById('signinPassword')
var pathparts = location.pathname.split('/');
var baseURL = ''
for (var i = 0; i < pathparts.length - 1; i++) {
    baseURL += '/' + pathparts[i]
}

var username = localStorage.getItem('sessionUsername')
if (username) {
    document.getElementById('username').innerHTML = "Welcome " + username
}
var signUpArray = []
if (localStorage.getItem('users') == null) {
    signUpArray = []
} else {
    signUpArray = JSON.parse(localStorage.getItem('users'))
}

function signup(){
    if (upName.value == "" || upEmail.value == "" || upPassword.value == "") {
        document.getElementById('exist').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'

        return false

    } 
var sup={ 
name:upName.value,
mail:upEmail.value,
passwd:upPassword.value,
};
if(signUpArray.length==0){
signUpArray.push(sup)
localStorage.setItem('users',JSON.stringify(signUpArray))
document.getElementById('exist').innerHTML = '<span class="text-success m-3">Success</span>'
} 
var x=true
    for (var i = 0; i < signUpArray.length; i++) {
        if (signUpArray[i].email == upEmail.value) {
                document.getElementById('exist').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
    x=false
            }
}
if(x==true){

    signUpArray.push(sup)
    localStorage.setItem('users', JSON.stringify(signUpArray))
    document.getElementById('exist').innerHTML = '<span class="text-success m-3">Success</span>'

}


}

function login(){
    if (inPassword.value == "" || inEmail.value == "") {
        document.getElementById('incorrect').innerHTML = '<span class="text-danger m-3">All inputs are required</span>'
        return false

    }
    var passwd = inPassword.value
    var mail = inEmail.value

    for(var i=0 ; i<signUpArray.length;i++)
        {
if(signUpArray[i].mail.toLowerCase()==mail.toLowerCase() && signUpArray[i].passwd==passwd){

    localStorage.setItem('sessionUsername', signUpArray[i].name)
    window.location = "http://127.0.0.1:5500/home.html"
        
//         if (baseURL == '/') {
//             location.replace('https://' + location.hostname + '/home.html')

//         } else {
//             location.replace(baseURL + '/home.html')

        
//    } } else {
        document.getElementById('incorrect').innerHTML = '<span class="p-2 text-danger">incorrect email or password</span>'
    }
}}


function logout() {
    localStorage.removeItem('sessionUsername')
}
