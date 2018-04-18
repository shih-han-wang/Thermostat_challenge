$(document).ready(function(){
  var thermostat = new Thermostat();
  degreeUpdate()
  savingModeUpdate()

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

  function degreeUpdate(){
    $("#degree").text(thermostat.currentDegree())

    if(thermostat.currentEnergyUsage() === 'low-usage'){
      $("#degree").css("color", "green")
    }else if(thermostat.currentEnergyUsage() === 'medium-usage'){
      $("#degree").css("color", "purple")
    }else{
      $("#degree").css("color", "red")
    };
  };

  function savingModeUpdate(){
      $("#prower-saving-mode").text(thermostat.powerSavingMode())
  };

});
