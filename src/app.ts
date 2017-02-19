import { autoinject } from 'aurelia-framework';
import {FirebaseApp} from "./resources/datatypes/FirebaseApp";

@autoinject
export class App 
{
  //#region Injected Services
  public firebaseApp: FirebaseApp;
  //#endregion

  public title: string = 'Hello World!';
  public firebaseMessage: string;

  constructor(firebaseApp: FirebaseApp)
  {
    this.firebaseApp = firebaseApp;        
    this.firebaseMessage = firebase.database.name;
  }
}
