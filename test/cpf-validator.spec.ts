import { add, returnCpf } from "../src/cpf-validator"

describe("Validate Cpf suite", () => {
    it("Return a valid CPF", () => {
        const result = returnCpf();
        expect(result).toBe("123456789-02");
    });


})
