import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebRequestService } from 'src/app/web-request.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private req : WebRequestService) { }
  getUserById(id) : Observable<any> {
    return this.req.get("api/Users/"+id);
  }
  updateUser(id,data) : Observable<any> {
    return this.req.put("api/Users/"+id,data);
  }
}
