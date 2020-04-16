// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA1unUPPxmMSwJGQ1khDiDLtxAXYElqm54",
    authDomain: "fossboy.firebaseapp.com",
    databaseURL: "https://fossboy.firebaseio.com",
    projectId: "fossboy",
    storageBucket: "fossboy.appspot.com",
    messagingSenderId: "450895180598",
    appId: "1:450895180598:web:a83726d23d7bce4845b997",
    measurementId: "G-6XXEJJYEBK"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Get a reference to the database service
var database = firebase.database();

function createNewTask(title,des,priority,difficulty,creator,assignee,estimatedTime,status,category) {

  var taskIdNumber = getIdNumber();
  var taskId = category[0]+taskIdNumber;

  firebase.database().ref('Tasks/' + taskId).set({
    Title: title,
    Description: des,
    Priority: priority,
    Difficulty: difficulty,
    Creator: creator,
    Assignee: assignee,
    ET: estimatedTime,
    Status: status,
    Category: category
  });

  newTaskCreatedSuccessfully();
}

function getIdNumber()
{
  var today = new Date();
  var date = today.getFullYear()+""+(today.getMonth()+1)+""+today.getDate();
  var time = today.getHours() + "" + today.getMinutes() + "" + today.getSeconds();

  var result = date + time;

  return result;
}

function newTaskCreatedSuccessfully()
{
  $("#createNewTask").fadeOut(100);
  $("#successful").fadeIn(0);
  $("#successful").fadeOut(5000);
  $("#bodyContent").fadeIn(5000);
}

function getTasks()
{
  var result = "ok";

  result = getTasksData();

  return result;
}

function getTasksData()
{
  var result = "ok";

  document.getElementById("jobTickets").innerHTML = "";

  var taskData = firebase.database().ref('Tasks/');
  taskData.on('child_added', function(snapshot) {
    setIntoTaskCard(snapshot.key, snapshot.val());
  });

  return result;
}