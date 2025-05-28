import {Component, OnInit} from '@angular/core';
import {ClinetService} from '../services/clinet.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-client-modifier',
  templateUrl: './client-modifier.component.html',
  styleUrl: './client-modifier.component.css'
})
export class ClientModifierComponent implements OnInit {
  ClientList:any[] = []
  client = {
    id : '',
    nom : '',
    email : '',
    motdepasse :''
  }
  public id:any
  constructor(private clientServices:ClinetService,private route:Router,
              private router: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id');
    this.GetClientByid()
  }

  GetClientByid(){
    this.clientServices.afficherClientparid(this.id).subscribe((data)=>{
      this.client = data;
    })
  }
  editForm() {
    this.clientServices.Editclient(this.client,this.id).subscribe(data => {
      if (data) {
        this.route.navigateByUrl('/AffClient');
      }
    });
  }
}
