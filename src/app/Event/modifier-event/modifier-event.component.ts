import {Component, OnInit} from '@angular/core';
import {EventService} from '../../services/event.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-modifier-event',
  templateUrl: './modifier-event.component.html',
  styleUrl: './modifier-event.component.css'
})
export class ModifierEventComponent implements OnInit {
  Event = {
    id:'',
    capacite:'',
    description:'',
    lieu:'',
    date:'',
    categorie:'',
    titre:''
  }
  public id:any
  constructor(private eventServices:EventService,private router:Router,
              private route:ActivatedRoute,) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  this.getClientByid();

  }
  getClientByid(){
    this.eventServices.AfficherEventparid(this.id).subscribe(data=>{
      this.Event = data;
    })
  }

  editForm() {
        this.eventServices.EditEvent(this.Event,this.id).subscribe(data=>{
          if(data){
            this.router.navigateByUrl("/AffEvent");
          }
        })
  }
}
