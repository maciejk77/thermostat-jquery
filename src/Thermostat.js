function Thermostat() {
  this.defaultTemperature = 20;
  this.temperature = this.defaultTemperature;
  this.powerSave = true;
  this.minTemperature = 10;
  this.maxTemperature = this.powerSaveCheck();
};

Thermostat.prototype.powerSaveSwitch = function() {
  this.powerSave = !(this.powerSave);
  this.maxTemperature = this.powerSaveCheck();
  if(this.temperature > this.maxTemperature) {
    this.temperature = this.maxTemperature;
  };
};

Thermostat.prototype.powerSaveCheck = function() {
  if(this.powerSave === true) {
    return 25;
  } else {
    return 32;
  }
};