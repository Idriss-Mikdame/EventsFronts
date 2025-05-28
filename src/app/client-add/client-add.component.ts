import {Component, OnInit} from '@angular/core';
import {ClinetService} from '../services/clinet.service';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrl: './client-add.component.css'
})
export class ClientADDComponent  implements OnInit {
  ClientList:any[] = []
  client = {
    nom : '',
    email : '',
    motdepasse :''
  }
  constructor(private clientServices:ClinetService) {
  }

  ngOnInit(): void {
    this.afficherClient()
  }

  afficherClient(){
    this.clientServices.AfficheClient().subscribe(Client=>{
      this.ClientList = Client;
      console.log(Client);
    })
  }
  ajouteClient(){
    this.clientServices.AjouterClient(this.client).subscribe(cliebtadd=>{
      this.ClientList = cliebtadd;

    })
  }
}
