import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Donation } from '../_models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DonationService {
  constructor(private http: HttpClient) { }

  create(donation: Donation) {
      return this.http.post(`${environment.apiUrl}/donation`, donation);
  }

  getbyBudgetId(budgetId: number) {
    return this.http.get<Donation[]>(`${environment.apiUrl}/donation?budgetId=${budgetId}`);
  }

  getByProjectId(projectId: number) {
    return this.http.get<Donation[]>(`${environment.apiUrl}/donation?projectId=${projectId}`);
  }

  getByContributorId(contributorId: number) {
    return this.http.get<Donation[]>(`${environment.apiUrl}/donation?contributorId=${contributorId}`);
  }

  getByContributorIdAndBudgetId(contributorId: number, budgetId: number) {
    return this.http.get<Donation[]>(`${environment.apiUrl}/donation?contributorId=${contributorId}&budgetId=${budgetId}`);
  }

  delete(id: number) {
    return this.http.delete(`${environment.apiUrl}/donation/${id}`);
  }

}
