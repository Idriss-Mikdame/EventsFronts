import {Component, OnInit} from '@angular/core';
import {EventService} from '../../services/event.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrl: './add-event.component.css'
})
export class AddEventComponent implements OnInit {
  ListEvnt:any[]=[];

  Event = {
    id:'',
    titre:'',
    description:'',
    lieu:'',
    date:'',
    categorie:'',
    capacite:''
  }
  constructor(private eventServices:EventService,private router:Router) {
  }

  ngOnInit(): void {
    this.afficheEvent();
  }

  afficheEvent(){
    this.eventServices.AfficheEvent().subscribe(Event=>{
      this.ListEvnt=Event;
      console.log(Event)
    })
  }


  AjouterEvent(){
    this.eventServices.AjouterEvent(this.Event).subscribe(eventadd=>{
      this.ListEvnt=eventadd;
      if(eventadd){
        this.router.navigateByUrl('/AffEvent');
      }

    })
  }




}
