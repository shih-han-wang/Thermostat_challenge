describe('Thermostat', function() {

     describe('starts at', function() {
        it('20 degree', function() {
            var thermostat = new Thermostat();
         expect(thermostat.degree).toEqual(20);
       });
     });

     describe('change the temperature by', function() {
        it('increase', function() {
            var thermostat2 = new Thermostat();
            thermostat2.up();
         expect(thermostat2.degree).toEqual(21);
        });

        it('decrease', function() {
            var thermostat3 = new Thermostat();
            thermostat3.down();
         expect(thermostat3.degree).toEqual(19);
        });
     });

     describe('the minimum temperature', function() {
        it('is 10', function() {
          thermostat4 = new Thermostat();
          var times = 11;
          for(var i=0; i < times; i++){
            thermostat4.down()
          };
         expect(thermostat4.degree).toEqual(10);
        });
     });

     describe('the maximum temperature', function() {

        it('is 25 when saving mode is on', function() {
          thermostat5 = new Thermostat();
          var times = 6;
          for(var i=0; i < times; i++){
            thermostat5.up()
          };
         expect(thermostat5.degree).toEqual(25);
        });

        it('is 35 when saving mode is off', function() {
          thermostat6 = new Thermostat();
          thermostat6.saving_mode = false
          var times = 16;
          for(var i=0; i < times; i++){
            thermostat6.up()
          };
         expect(thermostat6.degree).toEqual(35);
        });

     });

     describe('reset', function() {
        it('degree is 20', function() {
          thermostat7 = new Thermostat();
          var times = 5;
          for(var i=0; i < times; i++){
            thermostat5.up()
          };
          thermostat7.reset
         expect(thermostat7.degree).toEqual(20);
        });
     });

});
