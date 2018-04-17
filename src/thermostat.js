var Thermostat = function(){
  this.degree = 20;
  this.saving_mode = true;
};

Thermostat.prototype.up = function(){
  if(this.saving_mode === true && this.degree < 25){
    this.degree++
  }
  if(this.saving_mode === false && this.degree < 35){
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
