 interface drivingLicense {
    id: string,
    vehicle: string,
    drive(): string
 }

 class Driver implements drivingLicense {
    id: string;
    vehicle: string;

    constructor(id: string, vehicle: string) {
        this.id = id;
        this.vehicle = vehicle;
    }

    drive(): string {
        return `Driving id: ${this.id} && Driving Vehicle: ${this.vehicle}`;
    }
 }

 const lewis = new Driver('MRCDSAMGF1-1', 'gen-8th');
 console.log(lewis.drive());

