export class SimpleException implements Error {
    message: string;
    name: string;

    constructor(message: string, name: string) {
        this.message = message;
        this.name = name;
    }
}