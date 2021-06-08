export class GameCard{
    constructor(
        _id: number, 
        year: number, 
        seasontype: number, 
        date: Date, 
        status: string, 
        htname: string,
        htkey: string, 
        htid: number, 
        htscore: number, 
        htlogo: string, 
        htcolor1: string, 
        htcolor2: string, 
        atname: string,
        atkey: string, 
        atid: number, 
        atscore: number, 
        atlogo: string, 
        atcolor1: string, 
        atcolor2: string, 
        spread: number
    ){
        this.GameID = _id
        this.Year = year;
        this.SeasonType = seasontype;
        this.Date = date;
        this.Status = status;
        this.HTScore = htscore;
        this.ATScore = atscore;
        this.HTName = htname;
        this.HTKey = htkey;
        this.HTid = htid;
        this.HTLogo = htlogo;
        this.HTColor1 = htcolor1;
        this.HTColor2= htcolor2;
        this.ATName = atname;
        this.ATKey =atkey;
        this.ATid =atid;
        this.ATLogo = atlogo;
        this.ATColor1 = atcolor1;
        this.ATColor2= atcolor2;
        this.Spread =spread;
    }
    GameID: number;
    Year: number;
    SeasonType: number;
    Date: Date;
    Status: string;
    HTScore: number;
    ATScore: number;
    HTName: string;
    HTKey: string;
    HTid: number;
    HTLogo: string;
    HTColor1: string;
    HTColor2: string;
    ATName: string;
    ATKey: string;
    ATid: number;
    ATLogo: string;
    ATColor1: string;
    ATColor2: string;
    Spread: number;
}