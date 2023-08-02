export default class googleHome{

    public get searchTextbox () {
        return $("//textarea[@id='APjFqb']");
    }

    public get searchClickButton () {
        return $("//input[@value='Google Search']");
    }

    public async searchAnyText(value:string)
    {
        await this.searchTextbox.addValue(value);
        await console.log("done");
        //await this.searchClickButton.click();
    }

}
