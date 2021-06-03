import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { creditsModelComponent } from '../models/credits';

@Injectable({
  providedIn: 'root',
})
export class CreditsService {
  dbPath = '/credits';
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
  createUsuarios(credit: creditsModelComponent) {
    this.credits.add({ ...credit });
  }
}
