
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
      var destination = $("#trainDestination").val().trim();
      var firstTrain = moment($("#trainFirstArrival").val().trim(),"HH :mm").subtract(10, 'years');
      var frequency = $("#trainFrequency").val().trim(); 
    
      console.log(firstTrain);
      return false; 
 })
