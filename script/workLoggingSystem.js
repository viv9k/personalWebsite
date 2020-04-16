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
    $('.loadingPage').fadeOut(1000);
});

function setIntoTaskCard(id, data)
{
    var tickets = document.getElementById("jobTickets").innerHTML;
        
    var title = data.Title;
    var status = data.Status;
    var priority = data.Priority;
    var estimatedTime = data.ET;
    var difficulty = data.Difficulty;
    var des = data.Description;
    var creator = data.Creator;
    var category = data.Category;
    var assignee = data.Assignee;

    console.log (title, status, priority, estimatedTime, difficulty, des, creator, category, assignee);

    var frame = "<div class=\"row jobTicket\">";
    frame += "<div class=\"col-md-4 jobTicketCard\" id=\"";
    frame += id;
    frame += "\" onclick=\"showDetails(\'";
    frame += id;
    frame += "\')\">";
    frame += "<div class=\"row frameHead\">";
    frame += "<div class=\"col-md-3\">";
    frame += "<div class=\"row\">";
    frame += "<div class=\"col menu\">Id:</div>";
    frame += "<div class=\"col frameId\">"+id+"</div>";
    frame += "</div>";         
    frame += "</div>";
    frame += "<div class=\"col frameTitle\">"+title+"</div>";
    frame += "</div>";
    frame += "<div class=\"row frameContent\">";
    frame += "<div class=\"col-md-4\">";
    frame += "<div class=\"row\">";      
    frame += "<div class=\"col menu\">Priority:</div>";
    frame += "<div class=\"col priority\">"+priority+"</div>";
    frame += "</div>";
    frame += "</div>";
    frame += "<div class=\"col-md-4\">";
    frame += "<div class=\"row\">";
    frame += "<div class=\"col menu\">Assignee:</div>";
    frame += "<div class=\"col assignee\">"+assignee+"</div>";
    frame += "</div>";
    frame += "</div>";
    frame += "<div class=\"col-md-4\">";
    frame += "<div class=\"row\">";
    frame += "<div class=\"col menu\">Creator:</div>";
    frame += "<div class=\"col creator\">"+creator+"</div>";
    frame += "</div>";
    frame += "</div>";
    frame += "</div>";
    frame += "</div>";

    var idDetails = id+"Details";

    var frameDetails = "<div class=\"col-md-8\">";
    frameDetails += "<div class=\"row detailsRow\" id=\"";
    frameDetails += idDetails;
    frameDetails += "\">";
    frameDetails += "<div class=\"col\">";
    frameDetails += "<div class=\"row part\">";
    frameDetails += "<div class=\"col-md-2\" id=\"logWorkButton\">";
    frameDetails += "<button id=\"logWorkButton\" onclick=\"openLogWork()\">Log Work</button>";
    frameDetails += "</div>";
    frameDetails += "<div class=\"col-md-2\">";
    frameDetails += "<div class=\"row\">";
    frameDetails += "<div class=\"col menu\">Id:</div>";
    frameDetails += "<div class=\"col menuData\">"+id+"</div>";
    frameDetails += "</div>";
    frameDetails += "</div>";
    frameDetails += "<div class=\"col detailsTitle\">"+title+"</div>";
    frameDetails += "<div class=\"col-md-2 editButton\">";
    frameDetails += "<button id=\"editDetailsButton\">Edit</button>";
    frameDetails += "</div>"; 
    frameDetails += "</div>";
    frameDetails += "<div class=\"row part\">";
    frameDetails += "<div class=\"col-md-2 menu\">Description: </div>";
    frameDetails += "<div class=\"col\">";
    frameDetails += "<div class=\"row desBox\">";  
    frameDetails += "<div class=\"col\">"+des+"</div>"; 
    frameDetails += "</div>"; 
    frameDetails += "</div>";
    frameDetails += "<div class=\"col-md-1\">";  
    frameDetails += "</div>"; 
    frameDetails += "</div>";
    frameDetails += "<div class=\"row part\">";  
    frameDetails += "<div class=\"col\">"; 
    frameDetails += "<div class=\"row\">";
    frameDetails += "<div class=\"col menu\">Priority:</div>";  
    frameDetails += "<div class=\"col menuData\">"+priority+"</div>";
    frameDetails += "</div>"; 
    frameDetails += "</div>";
    frameDetails += "<div class=\"col\"></div>";  
    frameDetails += "<div class=\"col\">";
    frameDetails += "<div class=\"row\">";
    frameDetails += "<div class=\"col menu\">Difficulty:</div>";
    frameDetails += "<div class=\"col menuData\">"+difficulty+"</div>";
    frameDetails += "</div>";
    frameDetails += "</div>";
    frameDetails += "<div class=\"col\"></div>"; 
    frameDetails += "<div class=\"col\">";
    frameDetails += "<div class=\"row\">";
    frameDetails += "<div class=\"col menu\">Assignee:</div>";
    frameDetails += "<div class=\"col menuData\">"+assignee+"</div>";
    frameDetails += "</div>";
    frameDetails += "<br>";
    frameDetails += "<div class=\"row\">";
    frameDetails += "<div class=\"col menu\">Creator:</div>";
    frameDetails += "<div class=\"col menuData\">"+creator+"</div>";
    frameDetails += "</div>";
    frameDetails += "</div>";
    frameDetails += "</div>";
    frameDetails += "<div class=\"row part\">";
    frameDetails += "<div class=\"col-md-3\">";
    frameDetails += "<div class=\"row\">";
    frameDetails += "<div class=\"col menu\">Estimated Time:</div>";
    frameDetails += "<div class=\"col menuData\">"+estimatedTime+"h</div>";
    frameDetails += "</div>";
    frameDetails += "<br>";
    frameDetails += "<div class=\"row\">";
    frameDetails += "<div class=\"col menu\">Logged Time:</div>";
    frameDetails += "<div class=\"col menuData\">0h</div>";
    frameDetails += "</div>";
    frameDetails += "</div>";
    frameDetails += "<div class=\"col\"></div>";
    frameDetails += "<div class=\"col-md-5\">";
    frameDetails += "<div class=\"row\">";
    frameDetails += "<div class=\"col menu\">% of Work Code (Out of 100%):</div>";
    frameDetails += "<div class=\"col menuData\">20%</div>";
    frameDetails += "</div>";
    frameDetails += "</div>";
    frameDetails += "<div class=\"col\"></div>";
    frameDetails += "<div class=\"col-md-3\">";
    frameDetails += "<div class=\"row\">";
    frameDetails += "<div class=\"col menu\">Status:</div>";
    frameDetails += "<div class=\"col menuData\">"+status+"</div>";
    frameDetails += "</div>";
    frameDetails += "</div>";
    frameDetails += "</div>";
    frameDetails += "</div>";
    frameDetails += "</div>";
    frameDetails += "</div>";
    frameDetails += "</div>";

    frame += frameDetails;

    if (tickets == "")
        tickets = frame;
    else
        tickets += frame;

    document.getElementById("jobTickets").innerHTML = tickets;

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