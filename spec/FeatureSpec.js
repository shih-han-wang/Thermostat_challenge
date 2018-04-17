'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

     describe('starts at', function() {
        it('20 degree', function() {
         expect(thermostat.degree).toEqual(20);
       });
     });

     describe('change the temperature by', function() {
        it('increase', function() {
          thermostat.up();
          expect(thermostat.degree).toEqual(21);
        });

        it('decrease', function() {
          thermostat.down();
         expect(thermostat.degree).toEqual(19);
        });
     });

     describe('the minimum temperature', function() {
        it('is 10', function() {
          var times = 11;
          for(var i=0; i < times; i++){
            thermostat.down();
          };
         expect(thermostat.degree).toEqual(10);
        });
     });

     describe('the maximum temperature', function() {

        it('is 25 when saving mode is on', function() {
          for(var i=0; i < 8; i++){
            thermostat.up();
          };
         expect(thermostat.degree).toEqual(25);
        });

        it('is 35 when saving mode is off', function() {
          thermostat.savingMode = false
          for(var i=0; i < 15; i++){
            thermostat.up();
          };
         expect(thermostat.degree).toEqual(32);
        });

     });

     describe('reset', function() {
        it('degree is 20', function() {
          for(var i=0; i < 5; i++){
            thermostat.up()
          };
          thermostat.reset();
         expect(thermostat.degree).toEqual(20);
        });
     });

     describe('current energy usage', function() {
        it('less than 18 is low', function() {
          for(var i=0; i < 5; i++){
            thermostat.down()
          };
         expect(thermostat.currentEnergyUsage()).toMatch('low-usage');
        });

        it('between 18 and 25 is medium', function() {
         expect(thermostat.currentEnergyUsage()).toMatch('medium-usage');
        });

        it('more than 25 is high ', function() {
          for(var i=0; i < 6; i++){
            thermostat.up()
          };
         expect(thermostat.currentEnergyUsage()).toMatch('high-usage');
        });

     });

});
