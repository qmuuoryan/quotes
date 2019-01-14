export class Quote {
  public showDescription:boolean
  constructor(
    public id:number,
    public name:string,
    public description:string,
    // public personSubmitting:string,
    public newDate: Date){

this.showDescription=false
    }

}
