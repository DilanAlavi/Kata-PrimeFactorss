import Factorial from "./PrimeFactors";
describe("Factorial", () => {
    it("ingresamos un numero <=1 y nos retorna un valor nulo", () => {
      expect(Factorial(1)).toEqual([]);
    });
  });

