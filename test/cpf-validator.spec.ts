import { add, returnCpf } from "../src/cpf-validator"

describe("Validate Cpf suite", () => {
    it("Return a valid CPF", () => {
        const result = returnCpf();
        expect(result).toBe("123456789-02");
    });

    it.only("Add two numbers", () => {
        // arrange
        const a = 8;
        const b = 4;

        // act
        const result = add(a, b);

        // assert
        expect(result).toBe(12);
    });
})
