export class CpfValidator {
    public validate(cpf: string) {
        if (!(/^\d+$/.test(cpf))) {
            return false;
        }
    }
}
