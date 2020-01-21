import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { catchError} from 'rxjs/operators';
import { BaseService } from './base.service';
import { User } from '../models/user';
import { AppConfig } from '../config/config';
import { Helpers } from '../shared/helpers/helpers';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {

  private pathAPI = this.config.setting['PathAPI'];

  constructor(private http: HttpClient, private config: AppConfig, helper: Helpers) { super(helper); }

  /** GET heroes from the server */

  getUsers (): Observable<User[]> {
    return <Observable<User[]>> this.http.get(this.pathAPI + 'user', super.header()).pipe(
    catchError(super.handleError));
  }

}
