import {Street} from './Street';
import {Car, Motorcycle} from './vehicle';

let WallStreet = new Street ('Wall street', 25, 3, false);

let tesla = [new Car(true, 5, 'Electric', 20)];
let toyota = [new Car(true, 5, 'Hybrid', 25), new Car(true, 5, 'Gasoline', 22)];
let honda = [new Motorcycle(true, 1, 'Gasoline', 23)];

WallStreet.increaseTraffic(tesla.length + toyota.length + honda.length);
WallStreet.printTraffic();

toyota[1].setSpeed(70);
toyota[1].drift();
