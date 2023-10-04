friends = [];

function submit() {
    var name_1 = document.getElementById("namenumber1").value
    var name_2 = document.getElementById("namenumber2").value
    var name_3 = document.getElementById("namenumber3").value
    var name_4 = document.getElementById("namenumber4").value

    friends.push(name_1)
    friends.push(name_2)
    friends.push(name_3)
    friends.push(name_4)

    console.log(friends)

    document.getElementById("display_name").innerHTML = friends;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";

}
function sorting()
{
friends.sort()
console.log(friends)
document.getElementById("display_name").innerHTML = friends;
}