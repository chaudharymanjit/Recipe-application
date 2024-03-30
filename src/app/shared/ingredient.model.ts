
export class ingredient{
    public name:string;
    public amount:number|string;

    constructor(name:string, amount:number|string){
        this.name=name;
        this.amount=amount;
    }
}