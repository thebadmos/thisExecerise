//sumEvenArguments
describe("sumEvenArguments", function () {
    it("takes all the arguments and returned an even number", function () {
        expect(sumEvenArguments(1, 2, 3, 4)).toEqual(6)
        expect(sumEvenArguments(1, 2, 6)).toEqual(8)
        expect(sumEvenArguments(1, 2)).toEqual(2)

    });

});


//invokeMax
describe("invokeMax", function(){
    function add(a,b){
        return a+b
    }
    it("returns a function that calls another function a certain amount of times", function(){
  
     var addOnlyThreeTimes = invokeMax(add,3);
     expect(addOnlyThreeTimes(1,2)).toEqual(3) 
     expect(addOnlyThreeTimes(2,2)).toEqual(4) 
     expect(addOnlyThreeTimes(1,2)).toEqual(3) 
      });
  });


  