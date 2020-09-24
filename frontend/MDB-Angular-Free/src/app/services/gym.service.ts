import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UrlSegmentGroup, Router } from '@angular/router';
import { unescapeIdentifier } from '@angular/compiler';
import { LoggedInUser } from '../models/logged-in-user';
import { Time } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class GymService {

  private loggedInUser: LoggedInUser;

  constructor(private http: HttpClient, private router: Router) { }

  httpLogIn(username: string, password: string): Observable<any> {
    return this.http.post("/login", { username, password });
  }

  httpLogOut() {
    this.loggedInUser = undefined;
    localStorage.removeItem('jwt');
    this.router.navigate(['/']);
  }

  isTrainer(): boolean {
    if (this.loggedInUser !== undefined && this.loggedInUser.role == '1') {
      return true;
    }
    return false;
  }

  isTrainee(): boolean {

    if (this.loggedInUser !== undefined && this.loggedInUser.role == '2') {
      return true;
    }
    return false;
  }

  isAnybody(): boolean {
    return this.isTrainee() || this.isTrainer();
  }

  setCurrUser(res: any) {
    this.loggedInUser = res;
  }

  getCurrUser() {
    return this.loggedInUser;
  }

  getFirstName(): string {
    return this.loggedInUser === undefined ? "" : this.loggedInUser.firstName;
  }

  getLastName(): string {
    return this.loggedInUser === undefined ? "" : this.loggedInUser.lastName;
  }

  getId(): string {
    return this.loggedInUser === undefined ? "" : this.loggedInUser.id;
  }

  getToken(): string {
    return localStorage.getItem("jwt");
  }

  add(regObj: any): Observable<any> {
    return this.http.post("/addNewTrainee", regObj);
  }

  trialTraining(name, phone, message = ""): Observable<any> {
    return this.http.post("/trialTraining", { name, phone, 'message': message });
  }

  getMembercards(idT = "") {

    if (idT === "") {
      return this.http.get("/getMembercards");
    } else {
      return this.http.get("/getMembercards" + "?id=" + idT);
    }
  }

  getGrouptrainins() {
    return this.http.get("/getGrouptrainings");
  }

  signUpGrouptraining(id: number) {
    return this.http.post("/signUpGrouptraining", { trainingId: id });
  }

  charge(id, duration) {
    return this.http.post("/chargeAMemberCard", { id, duration })
  }

  makeAGroupTraining(name: string, date: Date, time: Time) {
    return this.http.post("/makeGrouptraining", { name, date, time })
  }

  getGrouptraininsId(): Observable<any> {
    return this.http.get("/getAllMineTrainer");
  }

  getTrialTrainings(): Observable<any> {
    return this.http.get("/getTrialTrainings");
  }

  getAllTrainees(): Observable<any> {
    return this.http.get("/getAllTrainees");
  }

  getJwt(): Observable<any> {
    return this.http.get("/getJwt");
  }

  getTrainee(idTrainee: string): Observable<any> {
    return this.http.get("getTrainee" + "?id=" + idTrainee);
  }

  getRole(): string {
    if (!this.loggedInUser) {
      return undefined;
    }
    return this.loggedInUser.role;
  }

  getGrouptraininsScheduled(): Observable<any> {
    return this.http.get('/getAllMineTrainee');
  }

  removeFromTraining(id: any): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        trainingId: id,
      },
    };
    return this.http.delete('/removeFromTraining', options);
  }

  changePassword(p1: string, p2: string): Observable<any> {

    return this.http.put('/changePassword', { p1, p2 });
  }

  doneTrialTrainings(id): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        id
      },
    };
    return this.http.delete('/doneTrialTraining', options);
  }

  evidentArriving(id: string): Observable<any> {
    return this.http.put('/evidentArriving', { id });
  }

  compareDate(d1: Date, d2: Date): number {
    if (d1.getFullYear() < d2.getFullYear()) {
      return -1;
    } else if (d1.getFullYear() > d2.getFullYear()) {
      return 1;
    } else {
      if (d1.getMonth() < d2.getMonth()) {
        return -1;
      } else if (d1.getMonth() > d2.getMonth()) {
        return 1;
      } else {
        if (d1.getDate() < d2.getDate()) {
          return -1;
        } else if (d1.getDate() > d2.getDate()) {
          return 1;
        } else {
          return 0;
        }
      }
    }
  }

  getTrainingsUnique(): Observable<any> {
    return this.http.get('/getTrainingsUnique');
  }

  getMyStats(training, date1, date2): Observable<any> {
    let headers = { training, date1, date2 }
    return this.http.get('/getMyStats', { headers })
  }

  getTrainersStats(date1, date2): Observable<any> {
    let headers = { date1, date2 }
    return this.http.get('/getTrainersStats', { headers })
  }

}
