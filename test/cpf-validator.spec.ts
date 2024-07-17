import { CpfValidator } from "../src/cpf-validator"

describe("Validate Cpf suite", () => {

    let cpfValidate: CpfValidator;

    beforeEach(() => {
        cpfValidate = new CpfValidator();
    });

    it('Return CPF with letters - invalid', () => {
        const cpf = '000000000aa';
        const result = cpfValidate.validate(cpf);
        expect(result).toBe(false);
    });

    it('Return CPF only valid numbers', () => {
        const cpf = '00000000000';  // Cambiado a 11 dígitos
        const result = cpfValidate.validate(cpf);
        expect(result).toBe(true);
    });

    it('Return CPF with more than 11 numbers - invalid', () => {
        const cpf = '000000000000';
        const result = cpfValidate.validate(cpf);
        expect(result).toBe(false);
    });

    it('Return CPF with less than 11 numbers <- invalid', () => {
        const cpf = '00000000';  // 8 digits
        const result = cpfValidate.validate(cpf);
        expect(result).toBe(false);
    });

    it('Return CPF with 11 numbers - valid', () => {
        const cpf = '00000000000';  // 11 digits
        const result = cpfValidate.validate(cpf);
        expect(result).toBe(false);
    });

})
