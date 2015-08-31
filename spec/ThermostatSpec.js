describe('Thermostat default settings', function() {

  beforeEach(function() {
    thermostat = new Thermostat();
  });
  
  it('has a default temperature of 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it('has a Power Save mode switched to ON as default', function() {
    expect(thermostat.powerSave).toBe(true);
  });

  it('has a minimum temperature of 10 degrees', function(){
    expect(thermostat.minTemperature).toEqual(10);
  });

  it('has a maximum temperature of 25 if Power Saving is ON', function() {
    expect(thermostat.maxTemperature).toEqual(25);
  });

  it('has a maximum temperature of 32 if Power Saving is OFF', function() {
    thermostat.powerSaveSwitch();
    expect(thermostat.maxTemperature).toEqual(32);
  });

});

describe('Thermostat features', function() {

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('can increase temperature with UP button', function() {
    newTemperature = (thermostat.temperature + 1);
    thermostat.increase();
    expect(thermostat.temperature).toEqual(newTemperature);
  });

  it('can decrease temperature with DOWN button', function() {
    newTemperature = (thermostat.temperature - 1);
    thermostat.decrease();
    expect(thermostat.temperature).toEqual(newTemperature);
  });


  it('can reset to default temperature', function() {
    thermostat.increase();
    thermostat.resetButton();
    expect(thermostat.temperature).toEqual(thermostat.defaultTemperature);
  });

});
