import { CpfValidator } from "../src/cpf-validator"

describe("Validate Cpf suite", () => {

    let cpfValidate: CpfValidator;

    beforeEach(() => {
        cpfValidate = new CpfValidator();
    });

    it("Return CPF with letters -> invalid", () => {
        const cpf = '000000000aa';
        const result = cpfValidate.validate(cpf);
        expect(result).toBe(false);
    });

    it("Return CPF only valid numbers", () => {
        const cpf = '000000000';
        const result = cpfValidate.validate(cpf);
        expect(result).toBe(true);
    });

    it("Return CPF with more of 11 numbers -> invalid", () => {
        const cpf = '000000000000';
        const result = cpfValidate.validate(cpf);
        expect(result).toBe(false);
    });

})
