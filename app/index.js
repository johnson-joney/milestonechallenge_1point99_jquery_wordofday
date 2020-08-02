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
	let date = formatDate(new Date());
	console.log(date);
	console.log($('#date'));
	$('#date').val(date);
  getWord(date);
}
function getDate() {
	let date = $('#date').val();
	getWord(date);
}

function formatDate(date){
	return [date.getFullYear(), padZero(date.getMonth() + 1), padZero(date.getDate())].join("-");
}

function getWord(date){
	$.get(baseUrl + date + apiKey, function(success){
		console.log(success);
		$('#wordofday').html(success.word);
		$('#defin').html(success.definitions.map(function(d){ return d.text }).join("<br/>"));
	}).fail(function(error){
		console.log(error);
		$('#wordofday').html("Word " + error.responseJSON.error);
		$('#defin').html('');
	});
}

function padZero(number){
	return number.toString().length == 1 ? ("0" + number) : number;
}
