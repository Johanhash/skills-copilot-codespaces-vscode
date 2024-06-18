function skillsMember() {
    var member = document.getElementById("member");
    member.innerHTML = "Skills: ";
    var skills = ["HTML", "CSS", "JavaScript"];
    for (var i = 0; i < skills.length; i++) {
        member.innerHTML += skills[i];
        if (i == skills.length - 1) {
            member.innerHTML += ".";
        } else {
            member.innerHTML += ", ";
        }
    }
}
