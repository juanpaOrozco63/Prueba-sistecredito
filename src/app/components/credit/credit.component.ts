import { Component, OnInit } from '@angular/core';
import { creditsModelComponent } from '../../models/credits';
import { AngularFirestore } from '@angular/fire/firestore';
import { CreditsService } from '../../services/credits.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { creditDomain } from '../../domains/credit';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css'],
})
export class CreditComponent implements OnInit {
  currentPage: number = 1;
  credits: any[] = new Array<any>();
  formCreateCredit: FormGroup;
  credit : creditDomain
  search:string ='';
  validate:boolean=false;
  cities:any={}
  arrIdentificationType:string[]=['Cédula','Pasaporte','Tarjeta de identidad','Otro']
  creditModal:creditDomain;
  constructor(
    private db: AngularFirestore,
    private creditService: CreditsService,
    public modal: NgbModal,
    private fb: FormBuilder,
    private http:HttpClient 
  ) {
    this.createForm();
    this.loadFormData();
    this.createListeners();
  }

  ngOnInit(): void {
    this.getCities();
    this.getAllCredits();
    this.credit = new creditDomain(
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    );
  }
  getCities(){
    return this.http.get("../../assets/ciudades.json").subscribe(resp=>{
      this.cities=resp
    })
  }

  getAllCredits(): void {
    this.db
      .collection('creditos')
      .valueChanges()
      .subscribe((resp) => {
        this.credits = resp;
      });
  } 
  modalCreateCredit(inputName,inputLastName,inputEmail,
    inputIdentificationType,inputID,inputAddress,
    inputPhone,inputCity,inputNeighborhood,
    inputValue,inputDues): void {
      
      if(this.formCreateCredit.invalid){    
        Swal({
          icon: 'error',
          title: 'Error',
          text: 'Complete todos los datos',
        });      
        return Object.values(this.formCreateCredit.controls).forEach(control =>{
          control.markAsTouched();
        })
      }else{
        this.credit.name=inputName;
        this.credit.lastName=inputLastName;
        this.credit.email=inputEmail;
        this.credit.identificationType=inputIdentificationType;
        this.credit.id=inputID;
        this.credit.address=inputAddress;
        this.credit.phone=inputPhone;
        this.credit.city=inputCity;
        this.credit.neighborhood=inputNeighborhood;
        this.credit.value=inputValue;
        this.credit.dues=inputDues;       
        this.creditService.createCredits(this.credit)   
        Swal({
          icon: 'success',
          title: 'Completado',
          text: 'Se ha completado su registro correctamente',
        }); 
        this.modal.dismissAll()      
      }
  
  }
  // Método para crear formulario
  createForm() {
    this.formCreateCredit = this.fb.group({
      inputName:['',[Validators.required]],
      inputLastName:['',[Validators.required]],
      inputEmail:['',[Validators.required,Validators.email]],
      inputIdentificationType:['',[Validators.required]],
      inputID:['',[Validators.required]],
      inputAddress:['',[Validators.required]],
      inputPhone:['',[Validators.required]],
      inputCity:['',[Validators.required]],
      inputNeighborhood:['',[Validators.required]],
      inputValue:['',[Validators.required]],
      inputDues:['',[Validators.required]]
    });
  } 
  // Método para cargar data por defecto en el formulario
  loadFormData() {
    this.formCreateCredit.reset({
      inputName:'',
      inputLastName:'',
      inputEmail:'',
      inputIdentificationType:'',
      inputID:'',
      inputAddress:'',
      inputPhone:'',
      inputCity:'',
      inputNeighborhood:'',
      inputValue:'',
      inputDues:''
    });    
  }
  // Método para estar pendiente de los cambios en el HTMl es como un ngModel
  createListeners() {
    this.formCreateCredit.valueChanges.subscribe((value) => {
      this.credit.name =value.inputName
      this.credit.lastName =value.inputLastName
      this.credit.email =value.inputEmail
      this.credit.identificationType =value.inputIdentificationType
      this.credit.id =value.inputID
      this.credit.address =value.inputAddress
      this.credit.phone =value.inputPhone
      this.credit.city =value.inputCity
      this.credit.neighborhood =value.inputNeighborhood
      this.credit.value =value.inputValue
      this.credit.dues =value.inputDues


    });
  }
   get inputNameInvalid() {
    return (
      this.formCreateCredit.get('inputName').invalid &&
      this.formCreateCredit.get('inputName').touched
    );
  }
  get inputLastNameInvalid() {
    return (
      this.formCreateCredit.get('inputLastName').invalid &&
      this.formCreateCredit.get('inputLastName').touched
    );
  }
  get inputEmailInvalid() {
    return (
      this.formCreateCredit.get('inputEmail').invalid &&
      this.formCreateCredit.get('inputEmail').touched
    );
  }
  get inputIdentificationTypeInvalid() {
    return (
      this.formCreateCredit.get('inputIdentificationType').invalid &&
      this.formCreateCredit.get('inputIdentificationType').touched
    );
  }
  get inputIDInvalid() {
    return (
      this.formCreateCredit.get('inputID').invalid &&
      this.formCreateCredit.get('inputID').touched
    );
  }
  get inputAddressInvalid() {
    return (
      this.formCreateCredit.get('inputAddress').invalid &&
      this.formCreateCredit.get('inputAddress').touched
    );
  }
  get inputPhoneInvalid() {
    return (
      this.formCreateCredit.get('inputPhone').invalid &&
      this.formCreateCredit.get('inputPhone').touched
    );
  }
  get inputNeighborhoodInvalid() {
    return (
      this.formCreateCredit.get('inputNeighborhood').invalid &&
      this.formCreateCredit.get('inputNeighborhood').touched
    );
  }
  get inputValueInvalid() {
    return (
      this.formCreateCredit.get('inputValue').invalid &&
      this.formCreateCredit.get('inputValue').touched
    );
  }
  get inputCityInvalid() {
    return (
      this.formCreateCredit.get('inputCity').invalid &&
      this.formCreateCredit.get('inputCity').touched
    );
  }
  get inputDuesInvalid() {
    return (
      this.formCreateCredit.get('inputDues').invalid &&
      this.formCreateCredit.get('inputDues').touched
    );
  }
  clean(){
    this.loadFormData()
    return Object.values(this.formCreateCredit.controls).forEach(control =>{
      control.markAsUntouched();
    })
  }
  searchCredit(){
    let found:boolean= false;
    this.credits.forEach(credit=>{
      if(credit.email===this.search){
        this.credits = []
        this.credits.push(credit)
        found=true;
        this.validate=false;

      }
    })
    if(!found){
      this.validate=true;
      this.getAllCredits();
    }
    if(!found && this.search===''){
      this.validate=false;
      this.getAllCredits()
    }
    
    
  }
  //Abri el modal centrado
  openCentrado(contain, credit: creditDomain) {
    this.creditModal = credit;   
    //Abrir modal
    this.modal.open(contain, { centered: true });
  }
  editModalCredit(){
    let emailData;
    this.creditService.getCreditsList().get().subscribe(resp=>{
      resp.docs.forEach(data=>{
        const valueCredit= data.data();
         emailData = valueCredit.email;
        if(emailData===this.creditModal.email)
        this.creditService.updateCredit(data.id,this.creditModal)        

      })
      Swal({
        icon: 'success',
        title: 'Se actualizo correctamente',
        text: `El credito de ${emailData} fue actualizado correctamente`,
      }); 
      this.modal.dismissAll()     
    })
  }
}
