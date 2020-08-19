  const {add,subtract,multiply,divide,clearAllfields}= require("./calculator"); //the implementation file is accessed through this line

  // suite for addition operations 
  describe("valid additions", () => {
      test("1 + 1 = 2", () => {
        expect(add(1, 1)).toEqual(2);
      });
    
      test("10 + 20 = 30", () => {
        expect(add(10, 20)).toEqual(30);
        
      });

      test("10 + 2 = 12", () => {
          expect(add(10, 2)).toEqual(12);
      });

      test("5 + 20 = 25", () => {
          expect(add(5, 20)).toEqual(25);
      });

      test("0.4 + 0.1 = 0.5", () => {
          expect(add(0.4, 0.1)).toBeCloseTo(0.5);
      });
      
  });

  // suite for subtraction
  describe("valid subtractions", () => {
      test("8 - 1 = 7", () => {
        expect(subtract(8, 1)).toEqual(7);
      });
    
      test("30 - 20 = 10", () => {
        expect(subtract(30, 20)).toEqual(10);
      });

      test("10 - 2 = 8", () => {
        expect(subtract(10, 2)).toEqual(8);
      });

      test("5 - 20 = -15", () => {
        expect(subtract(5, 20)).toEqual(-15);
      });

      test("0.4 - 0.1 = 0.3", () => {
        expect(subtract(0.4, 0.1)).toBeCloseTo(0.3);
      });
    });

    // suite for multiplication
  describe("valid multiplications", () => {
    test("8 * 1 = 8", () => {
      expect(multiply(8, 1)).toEqual(8);
    });
  
    test("30 * 20 = 600", () => {
      expect(multiply(30, 20)).toEqual(600);
    });

    test("10 * 2 = 20", () => {
      expect(multiply(10, 2)).toEqual(20);
    });

    test("5 * 20 = 100", () => {
      expect(multiply(5, 20)).toEqual(100);
    });

    test("0.4 * 0.1 = 0.3", () => {
      expect(multiply(0.4, 0.1)).toBeCloseTo(0.04);
    });

  });

  // suite for division
  describe("valid divisions", () => {

    test("8/1 = 8", () => {
      expect(divide(8, 1)).toEqual(8);
    });
  
    test("3 / 0 = infinity", () => {
      expect(divide(4, 0)).toEqual('infinity');
    });

    test("10 / 2 = 5", () => {
      expect(divide(10, 2)).toEqual(5);
    });

    test("5 / 20 = 0.25", () => {
      expect(divide(5, 20)).toBeCloseTo(0.25);
    });

    test("2.5 / 1.2 = 2.08", () => {
      expect(divide(2.5, 1.2)).toBeCloseTo(2.08);
    });

    test("1.2 / 5.3 = 0.22", () => {
      expect(divide(1.2, 5.3)).toBeCloseTo(0.226);
      });
  });
  
  describe("clear button", () => {
 
    test("displays a 0 after a click on CE button", () => {
      expect(clearAllfields()).toEqual(0);
      });  
  });

    describe("equal button", () => {
      
      test('display the result of addition after clicking on equal button', () => {
          expect(add(6,7)).toEqual(13);
    });
      
      test('display the result of subtraction after clicking on equal button', () => {
          expect(subtract(5,1)).toEqual(4);
    });

      test('display the result of multiplication after clicking on equal button', () => {
          expect(multiply(5,1)).toEqual(5);
    });

        test('display the result of division after clicking on equal button', () => {
          expect(divide(5,1)).toEqual(5);
    })
      
  });