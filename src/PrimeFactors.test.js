import Factorial from "./PrimeFactors";
describe("Factorial", () => {
    it("ingresamos un numero <=1 y nos retorna un valor nulo", () => {
      expect(Factorial(1)).toEqual([]);
    });
  });
  describe("Factorial", () => {
    it("ingresamos el numero 2 y nos retorna 2", () => {
      expect(Factorial(2)).toEqual([2]);
    });
  });

