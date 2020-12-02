export default class Event {
    id:String
    pic:String;
    date:Date;
    name:String;
    Discription:String;
    constructor(){
        this.pic="../assets/pics/iStock_000040536788_Small-1260x840.jpg"
        this.name="cyberpunk 2077"
        this.id= Math.random().toString(36).substring(7);
        this.Discription="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed"
    }
    getId(){
        return this.id

    }
    getName(){
        return this.name
    }
    getDate(){
        return this.date

    }
    getDiscription(){
        return this.Discription
    }
    getPic(){
        return this.pic
    }
    checkUndefiendVar(){
        let undefiendVar="";
        if(this.name==undefined){
            undefiendVar+="name,"
        }
        if(this.date==undefined){
            undefiendVar+="date,"
        }
        if(this.Discription==undefined){
            undefiendVar+="Discription,"
        }
        return undefiendVar
    }
}
