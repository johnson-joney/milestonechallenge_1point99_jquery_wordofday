//Word of the Day
describe("word of the day", function() {
  beforeEach(function() {
    document.body.innerHTML =
      '<div class="accordion" id="todayWord" onclick="wordDay()">Word of the Day</div><div class ="panel"><div class="container"><div class="row"><div class="form-group" style="width:100%;"><input type="date" name="getDate" id="date" class="form-control col-12 col-md-3"><input type="submit" id="submitdate" onclick="getDate()" class="btn btn-info"></div></div></div><div class="container"><div class="row"><div class="col-xl-12 mx-auto"><p id="wordofday"></p></div></div><div class="row"><div class="col-xl-12 mx-auto"><p id="defin"></p></div></div><div class="row"><div class="col-xl-12 mx-auto"><p><img src=""></p></div></div></div></div>';
  });

  
  describe("Word of the day", function() {
    it("Word of the day", function() {
      $("#date").val("2018-05-07");
      $.ajaxSetup({
        async: false
      });
      $("#submitdate").trigger("click");
      expect(document.getElementById("wordofday").innerHTML).toBe("skolion");
    });
  });
});

//Today word
describe("Today Word", function() {
  beforeEach(function() {
    document.body.innerHTML =
      '<div class="accordion" id="todayWord" onclick="wordDay()">Word of the Day</div><div class ="panel"><div class="container"><div class="row"><div class="form-group" style="width:100%;"><input type="date" name="getDate" id="date" class="form-control col-12 col-md-3"><input type="submit" id="submitdate" onclick="getDate()" class="btn btn-info"></div></div></div><div class="container"><div class="row"><div class="col-xl-12 mx-auto"><p id="wordofday"></p></div></div><div class="row"><div class="col-xl-12 mx-auto"><p id="defin"></p></div></div><div class="row"><div class="col-xl-12 mx-auto"><p><img src=""></p></div></div></div></div>';
  });

  
  describe("Today Word", function() {
    it("current day word", function() {
      var event = { wordDay: function(){} };
      var spy = spyOn(event, 'wordDay');
      event.wordDay();
      $('#todayWord').trigger("click");
      expect(spy).toHaveBeenCalled();
    });
  });
});


