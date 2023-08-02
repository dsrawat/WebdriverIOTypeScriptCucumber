 export class utils{


    public  async enterText(element:Promise<WebdriverIO.Element>,value:string){
            (await element).addValue(value);
    }
}
 