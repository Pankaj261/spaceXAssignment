import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { spaceX } from '../models/spaceX.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LaunchServiceService {

  constructor(private http: HttpClient) { }

  // Create getSpaceData function to fetch data from API...
  getSpaceXData(param?): Observable<spaceX[]> {
    // Making Final Payload...
    const payload = {};
    // Checking param exists or not...
    if (!!param) payload[param.keys] = param.data;
    return this.http.get<spaceX[]>(environment.api_url, { params: payload });
  };

}
