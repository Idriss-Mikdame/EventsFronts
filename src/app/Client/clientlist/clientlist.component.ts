import {Component, OnInit} from '@angular/core';
import {ClinetService} from '../../services/clinet.service';

@Component({
  selector: 'app-clientlist',
  templateUrl: './clientlist.component.html',
  styleUrl: './clientlist.component.css'
})
export class ClientlistComponent implements OnInit {
  ClientList:any[] = []
  constructor(private Clienservices:ClinetService) {
  }
  ngOnInit(): void {
    this.getClientList()
  }

  getClientList(){
    this.Clienservices.AfficheClient().subscribe(client => {
      this.ClientList = client;
      console.log(client);
    })
  }
  Supprimeclient(id:number){
    console.log("ok")
    let conf = confirm("'Voulez-vous le supprimer Client?")
    if (conf){
      this.Clienservices.SupprimerClient(id).subscribe(supprime=>{
        if (supprime){
          this.getClientList();
        }
        window.location.reload();  // Reloads the entire page

      })
    }
  }
}
