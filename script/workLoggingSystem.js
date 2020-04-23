$("#loginBody").ready(function() {
    $('#loginBody').hide(0);
});

$("#loginButton").click(function() {
    $('#loginBody').fadeIn(200);
    $('#createNewTask').hide(0);
    $("#bodyContent").hide(0);
});

$("#signOutButton").ready(function() {
    $("#signOutButton").hide(0);
});

$("#backToMain").click(function() {
    $('#loginBody').fadeOut(100);
    $("#bodyContent").fadeIn(100);
});

$("#bodyContent").ready(function() {
    var result = getTasks();

    console.log(result);
    $('.loadingPage').delay(2000).fadeOut(0);
});

function setIntoTaskCard(id)
{
    var title = datalist[id].title;
    var status = datalist[id].status;
    var priority = datalist[id].priority;
    var estimatedTime = datalist[id].estimatedTime;
    var difficulty = datalist[id].difficulty;
    var des = datalist[id].des;
    var creator = datalist[id].creator;
    var category = datalist[id].category;
    var assignee = datalist[id].assignee;
    var logWorkTotalTime = datalist[id].logWorkTotalTime;
    var workDone = datalist[id].workDone;

    console.log (title, status, priority, estimatedTime, difficulty, des, creator, category, assignee);

    loadFrame(id, title, status, priority, estimatedTime, difficulty, des, creator, category, assignee, logWorkTotalTime, workDone);
   
    return "ok";
}

var showingDetailsFor = "";
var selectedId = "";

function showDetails(id)
{
    selectedId = id;
    id += "Details";

    if(showingDetailsFor == "") {
        showingDetailsFor = id;
        $("#"+id).slideDown();
    } else if(showingDetailsFor == id) {
        showingDetailsFor = "";
        $("#"+id).slideUp();
    } else {
        $("#"+showingDetailsFor).slideUp();
        showingDetailsFor = id;
        $("#"+id).slideDown();
    }
}

$("#createNewTask").ready(function() {
    $("#createNewTask").hide(0);
});

$("#allTaskPage").ready(function () {
    $("#allTaskPage").hide(0);
});

$("#createNewTaskButton").click(function () {
    $("#bodyContent").hide(0);
    $('#loginBody').hide(0);
    $("#createNewTask").fadeIn(100);
});

$("#backToMainFromCreateNewTask").click(function() {
    $('#createNewTask').fadeOut(100);
    $("#bodyContent").fadeIn(100);
});

$("#logWork").ready(function() {
    $("#logWork").hide(0);
});

function openLogWork()
{
    $("#bodyContent").hide(0);
    $('#loginBody').hide(0);
    $("#head").hide(0);
    $("#logWork").fadeIn(100);

    fillLogWork(selectedId);
}

function fillLogWork(id)
{
    document.getElementById("logWorkId").innerHTML = id;
    document.getElementById("logWorkTitle").innerHTML = datalist[id].title;
    document.getElementById("logWorkET").innerHTML = datalist[id].estimatedTime;
    document.getElementById("logWorkTotalTime").innerHTML = datalist[id].logWorkTotalTime;
    document.getElementById("logWorkStatus").value = datalist[id].status;
    document.getElementById("logWorkDone").value = datalist[id].workDone;
}

$("#backToMainFromLogWork").click (function() {
    $("#logWork").hide(0);
    $("#head").show(200);
    $("#bodyContent").show(200);
});

$("#submitNewTask").click(function() {
    var title = $("#titleCreateNewTask").val();
    var des = $("#desCreateNewTask").val();
    var priority = $("#priorityCreateNewTask").val();
    var difficulty = $("#difficultyCreateNewTask").val();
    var creator = $("#creatorCreateNewTask").val();
    var assignee = $("#assigneeCreateNewTask").val();
    var estimatedTime = $("#estimatedTimeCreateNewTask").val();
    var status = $("#statusCreateNewTask").val();
    var category = $("#categoryCreateNewTask").val();

    console.log(title);
    console.log(des);
    console.log(priority);
    console.log(difficulty);
    console.log(creator);
    console.log(assignee);
    console.log(estimatedTime);
    console.log(status);
    console.log(category);

    createNewTask(title,des,priority,difficulty,creator,assignee,estimatedTime,status,category);
});

$("#successful").ready(function() {
    $("#successful").hide(0);
});

// Keep listening the changes

var listnerTaskId = firebase.database().ref('Tasks/');
listnerTaskId.on('child_changed', function(data) {
    console.log(data.key);

    $("#logWork").hide(0);
    $("#head").show(200);
    $("#successful").show(0);
    $("#bodyContent").fadeIn(500);
    $("#successful").fadeOut(2000);
    getTasks();
    
});
listnerTaskId.on('child_removed', function(data) {
    console.log(data.key);
    removeDiv(data.key);
});

// Insert slogan
// firebase.database().ref('Slogan/' + 1).set({
//     Content: "The biggest is not taking risk."  
// });

//fetch slogan

var sloganId = Math.floor(Math.random() * 2);
var sloganContent = database.ref('Slogan/'+sloganId);
sloganContent.on('child_added', function(snapshot) {
    setSlogan(snapshot.val());
});

function setSlogan(data)
{
    document.getElementById("sloganContent").innerHTML = data;
}

function removeDiv(id)
{
    datalist.slice(id, 1);
    $("#"+id).remove();

    console.log(datalist);
}

$("#logWorkSubmit").click(function() {
    var id = document.getElementById("logWorkId").innerHTML;
    var logWorkTotalTime = document.getElementById("logWorkTotalTime").innerHTML;
    var logWorkTime = document.getElementById("logWorkTime").value;
    var status = document.getElementById("logWorkStatus").value;
    var workDone = document.getElementById("logWorkDone").value;

    logWorkTotalTime = parseInt(logWorkTotalTime) + parseInt(logWorkTime);

    var result = updateFromLogWorkData(id, logWorkTotalTime, status, workDone);

    console.log(result);

});

$("#allTaskButton").click(function() {
    $("#bodyContent").hide(0);
    $('#loginBody').hide(0);
    $("#createNewTask").hide(0);
    $("#allTaskPage").fadeIn(100);
});