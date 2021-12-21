import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../modals/color';
import { ListResponseModel } from '../modals/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl ="https://localhost:44336/api/colors/getall"

  constructor(private httpClient:HttpClient) { }

  getColors():Observable<ListResponseModel<Color>>{
    return this.httpClient.get<ListResponseModel<Color>>(this.apiUrl);
  }

}
