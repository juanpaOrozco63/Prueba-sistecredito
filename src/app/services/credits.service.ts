import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { creditsModelComponent } from '../models/credits';
import { creditDomain } from '../domains/credit';

@Injectable({
  providedIn: 'root',
})
export class CreditsService {
  dbPath = '/creditos';
  credits: AngularFirestoreCollection<creditsModelComponent> = null;

  constructor(private db: AngularFirestore) {
    this.credits = db.collection(this.dbPath);
  }
  //  Get list of credits
  getCreditsList(): AngularFirestoreCollection<creditsModelComponent> {
    return this.credits;
  }
  // Delete credits
  deleteCredit(key: string): Promise<void> {
    return this.credits.doc(key).delete();
  }
  // Create credits
  createCredits(credit: creditsModelComponent) {
    this.credits.add({ ...credit });
  }
  updateCredit(key:string,credit:creditDomain):Promise<void>{
    console.log("Entro")
    return this.credits.doc(key).update(credit);
  }
}
