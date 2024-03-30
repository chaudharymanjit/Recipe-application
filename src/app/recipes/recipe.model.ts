import { ingredient } from "../shared/ingredient.model";

export class Recipe{
    public name:string;
    public description:string;
    public imagePath:string
    public Ingredients:ingredient[]

    constructor(name:string, desc:string,imagePath:string,Ingredients:ingredient[]){
        this.name=name;
        this.description=desc;
        this.imagePath=imagePath;
        this.Ingredients=Ingredients;
    };
}