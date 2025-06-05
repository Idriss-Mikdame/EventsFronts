import {Component, OnInit} from '@angular/core';
import {ReservationService} from '../../services/reservation.service';
import {ClinetService} from '../../services/clinet.service';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrl: './add-reservation.component.css'
})
export class AddReservationComponent implements OnInit {
  ListEvent: any[] = [];
  ClientList: any[] = []
  ReservationList: any[] = [];
  Reservation = {
    idreservation: '',
    reseravtionDate: '',
    reservationNumber: '',
    iduser: '',
    idevent: ''
  }

  constructor(private ReservationSertvice: ReservationService, private clienServices: ClinetService) {
  }

  ngOnInit(): void {
    this.AffichageReservation()
    this.AffichageClient()
    this.AfiichageEvent();
  }

  AfiichageEvent() {
    this.ReservationSertvice.AfficheEvent().subscribe(EventList => {
      this.ListEvent = EventList;
      console.log(EventList);
    })
  }

  AffichageClient() {
    this.clienServices.AfficheClient().subscribe(client => {
      this.ClientList = client;
      console.log(client);
    })
  }

  AffichageReservation() {
    this.ReservationSertvice.AfficherReservation().subscribe(reservation => {
      this.ReservationList = reservation;
      console.log(reservation);
    })
  }

  AddReservation() {
    console.log("res")
    this.ReservationSertvice.AjouterReservation(this.Reservation).subscribe(addReservation => {
      this.ReservationList = addReservation;
      console.log(addReservation);
      console.log('Réservation ajoutée');
    }, error => {
      console.error('Erreur', error);
    });
  }
}
