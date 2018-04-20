$(document).ready(function(){
  var thermostat = new Thermostat();

  degreeUpdate()
  savingModeUpdate()
  displayCity('london')

  $("#degree-up").click(function(){
      thermostat.up();
      degreeUpdate()
  });

  $("#degree-down").click(function(){
      thermostat.down();
      degreeUpdate()
  });

  $("#degree-reset").click(function(){
      thermostat.reset();
      degreeUpdate()
  });

  $("#PSM-on").click(function(){
      thermostat.switchPowerSavingModeOn();
      savingModeUpdate()
  });

  $("#PSM-off").click(function(){
      thermostat.switchPowerSavingModeOff();
      savingModeUpdate()
  });

  $('#current-city').change(function(){
    var city = $('#current-city').val();
    displayCity(city)
  });

  function degreeUpdate(){
    $("#degree").text(thermostat.currentDegree())
    $("#degree").attr('class', thermostat.currentEnergyUsage())
  };

  function savingModeUpdate(){
      $("#prower-saving-mode").text(thermostat.powerSavingMode())
      $("#prower-saving-mode").attr('class', thermostat.powerSavingMode())
  };

  function displayCity(city){
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var appid = '&appid=4c97c369ec893101e67de19569afb141';
    var units = '&units=metric';
    $.get(url + appid + units, function(data) {
      $('#current-temperature').text(data.main.temp);
    });
  };


  // $().button('toggle')
  // $().button('dispose')
});
