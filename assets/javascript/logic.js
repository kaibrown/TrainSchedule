
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCnrRL7gXCpPCpX6mrzKJfTno_q1lD91P8",
    authDomain: "trainscheduler-d7a43.firebaseapp.com",
    databaseURL: "https://trainscheduler-d7a43.firebaseio.com",
    projectId: "trainscheduler-d7a43",
    storageBucket: "trainscheduler-d7a43.appspot.com",
    messagingSenderId: "626461072888"
  };
  firebase.initializeApp(config);

  var trainData = firebase.database();

  $("#trainSubmit").on("click", function(){
      var trainName = $("#trainName").val().trim();
      var trainDestination = $("#trainDestination").val().trim();
      var trainFirstArrival = $("#trainFirstArrival").val().trim();
      var trainFrequency = $("#trainFrequnecy").val().trim(); 
    
 })