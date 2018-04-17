'use strict';

var Thermostat = function(){
  this.degree = 20;
  this.savingMode = true;
};

Thermostat.prototype.up = function(){
  if(this.savingMode === true && this.degree < 25){
    this.degree++
  }
  if(this.savingMode === false && this.degree < 32){
    this.degree++
  }
  else{
    this.degree = this.degree
  }
};

Thermostat.prototype.down = function(){
  if(this.degree > 10){
    this.degree--
  }
  else{
    this.degree = this.degree
  }
};

Thermostat.prototype.reset = function(){
  this.degree = 20;
};

Thermostat.prototype.currentEnergyUsage = function(){
  if(this.degree < 18){
    return 'low-usage'
  }
  if(this.degree >= 18 && this.degree < 25){
    return 'medium-usage'
  }
  else{
    return 'high-usage'
  }
};
