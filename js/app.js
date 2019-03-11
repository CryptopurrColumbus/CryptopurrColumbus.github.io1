var openedCards = [];

$(".deck > .card").click(function(event) {
  // toggle the class of the elements
  openedCards.push($(this));
  $(this).toggleClass("open show");
  if (openedCards.length == 2) {
    // Check if they match
    if (
      openedCards[0][0].firstElementChild.className ===
      openedCards[1][0].firstElementChild.className
    ) {
      setTimeout(function() {
        alert(
          "You win! Refresh to play again or play the full version from my github account: https://github.com/CryptopurrColumbus/memory-archade-udacity"
        );
      }, 300);
    }
    openedCards = [];
  }
});


$(".send-mail-button").click(function(event) {
  var originalTarget = event.target;
  var userSubject = encodeURI($(".user-sub")[0].value);
  var userMessage = encodeURI($(".user-message")[0].value);
  var anchor = $(
    "<a href=" + "mailto:purvakhurana101@gmail.com?body=" + userMessage + "&amp;subject=" + userSubject + "></a>"
  );
  anchor[0].click();
});


// Initialize and add the map
function initMap() {
  var uluru = {lat: 29.3813779, lng: 76.9823816};
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 15, center: uluru});
  var marker = new google.maps.Marker({position: uluru, map: map});
}
