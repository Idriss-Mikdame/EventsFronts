import {Component, OnInit} from '@angular/core';
import {EventService} from '../../services/event.service';
import {Router} from '@angular/router';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrl: './list-event.component.css'
})
export class ListEventComponent implements OnInit {
  ListEvent:any[]=[];

  constructor(private eventService: EventService, private router: Router) {}

  ngOnInit(): void {
    this.AfiichageEvent()
  }


    AfiichageEvent(){
    this.eventService.AfficheEvent().subscribe(EventList=>{
      this.ListEvent=EventList;
      console.log(EventList);
    })
    }
  SupprimerEvent(id:number){
    console.log("ok")
    let conf = confirm("'Voulez-vous le supprimer Event?")
    if (conf){
      this.eventService.SupprimerClient(id).subscribe(Supprimer=>{
        this.ListEvent=Supprimer;
        console.log(Supprimer)
        if (Supprimer){
          this.ListEvent
        }
        window.location.reload();
      })
    }
  }

  protected readonly formatDate = formatDate;
}
