import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApplicationConfiguration } from '../app.config';
import { SignupModel } from '../app_controllers/models.controller';

@Injectable({ providedIn: 'root'})
export class SignupService {

  private _url =ApplicationConfiguration.Get().ApiServiceLink + 'Signup';
  constructor(private http: HttpClient) { }


  SaveUserRecord(signupModel: SignupModel) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/SaveUserRecord", signupModel, {
      headers
    })
  }

}
