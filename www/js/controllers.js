angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal) {

  $scope.currentTurn = 0;
  // These icon classes are for mapping the selected guesses to the UI
  $scope.icons = ['ion-social-apple', 'ion-social-android','ion-social-angular','ion-social-html5'];
  $scope.secretCode = [];
  $scope.allTurns = [];

  function Turn() {
    this.choices= [null, null, null, null];
    this.perfect= 0;
    this.almost= 0;
  };
  // The current selected icon to assign to any clicked position.
  // TODO: Needs to be set when buttons in menu.html are clicked.
  $scope.selectedIcon = 0;
  // TODO: You're going to need a data structure to hold a list of "turns";
  // and those "turns" are likely going to be objects...
  $scope.randCode = function(min, max, arrSize) {
    for(var i=0; i<arrSize; i++) {
      $scope.secretCode[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return $scope.secretCode;
  };
  // function getRandomIntInclusive(min, max) {
  // return Math.floor(Math.random() * (max - min + 1)) + min;

  // Initialize game state
  $scope.newGame = function() {
    $scope.randCode(1, 4, 4);
    $scope.currentTurn = 0;
    // TODO: Set all data properties/structures to their beginning state
    $scope.allTurns.push(new Turn());
  };

  // Run newGame() upon loading
  $scope.newGame();

  /*
  TODO: Call this function when the user clicks a 'score' button.
        The 'score' button should remain disabled until all positions have a value.
        Maybe a button with an icon of a checkmark would be a good UI choice? Or,
        just use a small button with text of 'Score'?
  */
  $scope.scoreTurn = function() {
    // TODO: Score the turn

    $scope.allTurns.push(new Turn());
    // $scope.allTurns.push($scope.turn.choices);
    console.log($scope.allTurns);


    // TODO: Show winModal IF turn is correct. Put line below in an if statement.
    // $scope.winModal.show();
    // $scope.turn.correcthoices = [];
  };


  // Create the winner modal.
  $ionicModal.fromTemplateUrl('templates/winner.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.winModal = modal;
  });

  // TODO: Call this function from the 'Play Again!' button in winModal's html (winner.html)
  $scope.playAgain = function() {
    $scope.newGame();
    $scope.winModal.hide();
  };

});
