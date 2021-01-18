import { IAlertMarqueeProps } from "./IAlertMarqueeProps";
export class ClassMarquee{
    public Title:string;
    public Excerpts:string;
   
  
    
    constructor(item: IAlertMarqueeProps){
        this.Title = item.Title;
        this.Excerpts = item.Excerpts;
    }
}