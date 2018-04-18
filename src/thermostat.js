'use strict';

var Thermostat = function(){
  this._degree = 20;
  this._savingMode = true;
  this.MINIMUM_TEMPERATURE = 10;
  this.MAX_LIMIT_PSM_ON = 25;
  this.MAX_LIMIT_PSM_OFF = 32;
  this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
};

Thermostat.prototype.currentDegree = function(){
  return this._degree;
};

Thermostat.prototype.isMinimumTemperature = function(){
  return this._degree === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this._savingMode === true;
}

Thermostat.prototype.switchPowerSavingModeOff = function() {
  this._savingMode = false;
}

Thermostat.prototype.switchPowerSavingModeOn = function() {
  if(this.currentDegree() > this.MAX_LIMIT_PSM_ON ){
    return;
  }
  this._savingMode = true;
}

Thermostat.prototype.powerSavingMode = function(){
  if(this.isPowerSavingModeOn()){
    return 'on'
  }
  return 'off'
};

Thermostat.prototype.isMaximumTemperature = function() {
  if (this.isPowerSavingModeOn() === false) {
    return this._degree === this.MAX_LIMIT_PSM_OFF;
  }
  return this._degree === this.MAX_LIMIT_PSM_ON;
}

Thermostat.prototype.up = function(){
  if(this.isMaximumTemperature()){
    return;
  }
  this._degree++
};

Thermostat.prototype.down = function(){
  if(this.isMinimumTemperature()){
    return;
  }
  this._degree--
};

Thermostat.prototype.reset = function(){
  this._degree = 20;
};

Thermostat.prototype.currentEnergyUsage = function(){
  if(this.currentDegree() < this.MEDIUM_ENERGY_USAGE_LIMIT){
    return 'low-usage'
  }
  if(this.currentDegree() >= this.MEDIUM_ENERGY_USAGE_LIMIT && this.currentDegree() < this.MAX_LIMIT_PSM_ON){
    return 'medium-usage'
  }
  else{
    return 'high-usage'
  }
};
