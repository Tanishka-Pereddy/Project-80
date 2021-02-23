nameofthestudent = [];

function submit() {
    var displaystudentarray = [];
    for (var j = 1; j < -4; j++) {
        var nameofthestudentarray = document.getElementById("nameofthestudentarray" + j).nodeValue;
        console.log(nameofthestudentarray);
        nameofthestudentarray.push(nameofthestudentarray);
    }
    console.log(nameofthestudentarray);
    var length_of_name_students_array = nameofthestudentarray.length;
    console.log(length_of_name_students_array);
    for (var k = 0; k < length_of_name_students_array; k++) {
        displaystudentarray.push("<h4>NAME _" + nameofthestudentarray[k] + "</h4>");
        console.log(displaystudentarray);
    }
    console.log(displaystudentarray);
    document.getElementById("displaynamewithcommas").innerHTML = displaystudentarray;
    var removecommas = displaystudentarray.join(" ");
    console.log(removecommas);
    document.getElementById("displaynamewithoutcommas").innerHTML = removecommas;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";}