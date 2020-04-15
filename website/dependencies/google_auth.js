var account_display = document.getElementById("account_display");
var account = document.getElementById("account_box");
var placeholder = document.getElementById("account_placeholder");
var sign_in = document.getElementById("signin_box");
var signout = document.getElementById("signout_btn");

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId());
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());

    placeholder.style.display = "none";
    sign_in.style.display = "none"

    account_display.innerHTML = `<span>${profile.getName()}</span>`;
    account.innerHTML += `<br><img id="account_img" src="${profile.getImageUrl()}"></img><br>`;
    account.innerHTML += `<h6 style="text-align: center;">${profile.getName()}</h6>`;
    account.innerHTML += `<h6 style="text-align: center;">${profile.getEmail()}</h6><br>`;
    signout.innerHTML += `<a class="btn btn-warning" href="#" onclick="signOut();">Sign out</a>`
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
    location.reload();
}