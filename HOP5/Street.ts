export class Street {
    private traffic: number;

    constructor(
        private name: string,
        private speedLimite: number,
        private lane: number,
        private isTwoWay: boolean
    ){
        this.traffic =0;
    }

    getname(){
        return this.name;
    }

    getTraffic(){
        return this.traffic;
    }

    setTraffic(traffic:number){
        this.traffic = traffic;
    }

    increaseTraffic(num: number){
        this.setTraffic(this.getTraffic()+ num);
    }

    reduceTraffic(num: number){
        this.setTraffic((this.getTraffic()-num >0)? (this.getTraffic()-num) : 0);
    }

    printTraffic(){
        console.log ('There are ' + this.getTraffic() + 
                            'vehicles on ' +this.getTraffic + '.');
    }
}