import { Component ,OnInit} from '@angular/core';
import event from './classes/event/event';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
     submit:boolean;
     updateEvent:boolean=false;
     ListOfEvents=Array();
     idUpdateEvent:String;
     ev:event;
     ngOnInit(){
      this.ev=new event();
      this.submit=false;
      this.updateEvent=false;
      this.idUpdateEvent=""
     }
     deleteEvent(id){
      this.ListOfEvents=this.ListOfEvents.filter((e)=>{
        return e.getId()!=id
      })
     }
     update(id){
       this.updateEvent=true
       let eventData=this.ListOfEvents.find(e=>{
         return e.getId()==id
       })
       this.ev=eventData;
       this.idUpdateEvent=id
     }
     DoUpdate(){
      this.ListOfEvents=this.ListOfEvents.map(e=>{
        if(e.getId()==this.idUpdateEvent){
          return this.ev;
        }else{
          return e
        }
      })
      this.updateEvent=false
      this.idUpdateEvent=""
      this.ev=new event();

     }
     cancelUpdate(){
       this.updateEvent=false
       this.ev=new event();

     }
    addEvent(){
      
      if(this.ev.checkUndefiendVar().length>0){
        let undefiendVar=this.ev.checkUndefiendVar()
        undefiendVar.split(",").forEach((e)=>{
          console.log(e)
          document.getElementById(e).classList.add("alarm")
          setTimeout(() => {
            document.getElementById(e).classList.remove("alarm")
          }, 5000);
        })
      }else{
        this.ListOfEvents.push(this.ev)
        this.ev=new event();
      }

    }
}
