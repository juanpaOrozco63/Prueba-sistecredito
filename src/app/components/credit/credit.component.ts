import { Component, OnInit } from '@angular/core';
import { creditsModelComponent } from '../../models/credits';
import { AngularFirestore } from '@angular/fire/firestore';
import { CreditsService } from '../../services/credits.service';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css']
})
export class CreditComponent implements OnInit {
  credits:any[]= new Array<any>();
  constructor(private db:AngularFirestore,private creditService:CreditsService) { }

  ngOnInit(): void {
    this.getAllCredits();
  }
  getAllCredits():void{
    this.db.collection("creditos").valueChanges().subscribe(resp=>{     
      this.credits = resp
    })
  }
}
