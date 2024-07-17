export class CpfValidator {
    public validate(cpf: string) {
        if (!(/^\d+$/.test(cpf))) {
            return false;
        }

        if (cpf.length > 11) {
            return false;
        }

        if (cpf.length < 11 ) {
            return false;
        }

        return true;
    }


}
