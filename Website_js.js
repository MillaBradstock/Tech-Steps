var contactS = document.getElementById("contacts");

contactS.addEventListener("click",function(event) {
    if (event.target == contacts) {
        console.log("You got me");
        //window.scrollTo(0,document.body.scrollHeight);
    }
});

function showAlert () {
    var textAlert='Page not created yet! Please return to Home or Learning pages.';
    alert(textAlert);
}