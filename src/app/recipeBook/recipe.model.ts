import { Ingredient } from '../shared/ingredints.model';

export class Recipe {
    public name: string;
    public Description: string;
    public imagePath: string;
    public ingredients:Ingredient[];
    constructor(name: any, desc: any, imagePath: any, ingredients:Ingredient[]) {
        this.name = name;
        this.Description = desc;
        this.imagePath = imagePath;
        this.ingredients = ingredients;

}
}
