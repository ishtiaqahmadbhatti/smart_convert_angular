import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApplicationConfiguration } from '../app.config';
import { ProfileModel} from '../app_controllers/models.controller';

@Injectable({ providedIn: 'root' })
export class ProfileService {

  private _url = ApplicationConfiguration.Get().ApiServiceLink + 'Profile';
  constructor(private http: HttpClient) { }

  LoadProfileList() {
    return this.http.get(this._url)
  }

  ViewProfileList(ID: number, Search: string) {
    return this.http.get(this._url + "/" + ID + "/" + Search)
  }

  GetProfileByID(id: number) {
    return this.http.get(this._url + "/GetProfileByID/" + id)
  }

  SaveProfile(obj: ProfileModel) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/SaveProfile", obj, {
      headers
    })
  }

  DeleteProfile(id: number) {
    return this.http.get(this._url + "/DeleteProfile/" + id)
  }
  

}
