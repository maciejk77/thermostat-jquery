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

// describe('Thermostat features', function(){

//   beforeEach(function() {
//     thermostat = new Thermostat();
//   });

//   it('can increase temperature by one degree', function() {
//     expect(thermostat.temperature).toEqual(21);
//   });

// });
