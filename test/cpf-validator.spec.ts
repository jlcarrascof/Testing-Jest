import { CpfValidator, returnCpf } from "../src/cpf-validator"

describe("Validate Cpf suite", () => {

    let cpfValidate: CpfValidator;

    beforeEach(() => {
        cpfValidate = new CpfValidator();
    });

    it("Return CPF with letters -> invalid", () => {
        const cpf = '000000000aa';
        const result = returnCpf();
        expect(result).toBe("123456789-02");
    });


})
