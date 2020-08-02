$(function() {
	$('.accordion').on('click', function() {
	  var panel = $(this).next()[0];
	  $('.accordion').not($(this)).removeClass('active');
	  $('.panel').not(panel).removeClass('show');
	  $(this).toggleClass('active');
	  $(panel).toggleClass("show");
  });
});


  
/*Date*/
var baseUrl = "https://api.wordnik.com/v4/words.json/wordOfTheDay?date=";
var apiKey = "&api_key=c23b746d074135dc9500c0a61300a3cb7647e53ec2b9b658e";
function wordDay(){
  
}
function getDate() {
 
}
