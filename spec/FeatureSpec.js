// describe('Airport', function() {
//
//   var airport;
//
//   beforeEach(function() {
//    // airport = new Airport();
//    plane = new Plane();
//    });
//
//    describe('has the plane after landing', function() {
//       it('has the plane', function() {
//           var airport1 = new Airport()
//           airport1.land(plane, 'sunny')
//        expect(airport1.hangar).toContain(plane);
//      });
//    });
//
//    describe('does not hava the plane after taking off', function() {
//      it('has no plane', function() {
//         var airport2 = new Airport()
//         airport2.take_off(plane, 'sunny')
//        expect(airport2.hangar).not.toContain(plane);
//      });
//    });
//
//    describe('when stormy, plane is not allowed to', function() {
//      it('land', function() {
//       var airport3 = function(){
//         airport3 = new Airport()
//         airport3.land(plane, 'stormy')
//       }
//        expect(airport3).toThrowError('Plane is not allowed to land when stormy');
//      });
//
//      it('take off', function() {
//       var airport4 = function(){
//         airport4 = new Airport()
//         airport4.take_off(plane, 'stormy')
//       }
//        expect(airport4).toThrowError('Plane is not allowed to take off when stormy');
//      });
//    });
//
//    describe('raises an error when', function() {
//      it('airport is full', function() {
//        var airport5 = function(){
//         airport5 = new Airport(3)
//         var times = 4;
//         for(var i=0; i < times; i++){
//           airport5.land(plane, 'sunny');
//         }
//        }
//        expect(airport5).toThrowError('Airport is full');
//      });
//    });
//
//
//
//   });

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
     //        var airport5 = function(){
     //         airport5 = new Airport(3)
     //         var times = 4;
     //         for(var i=0; i < times; i++){
     //           airport5.land(plane, 'sunny');
     //         }
});
