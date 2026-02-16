import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpotifyApiService {

  private readonly baseUrl = environment.spotifyApiUrl;

  constructor(private http: HttpClient) {}

  get<T>(endpoint: string, params?: Record<string, any>): Observable<T> {
    const httpParams = this.buildParams(params);

    return this.http.get<T>(`${this.baseUrl}/${endpoint}`, {
      params: httpParams
    });
  }

  post<T>(endpoint: string, body: any, params?: Record<string, any>): Observable<T> {
    const httpParams = this.buildParams(params);

    return this.http.post<T>(`${this.baseUrl}/${endpoint}`, body, {
      params: httpParams
    });
  }

  private buildParams(params?: Record<string, any>): HttpParams {
    let httpParams = new HttpParams();

    if (!params) return httpParams;

    Object.keys(params).forEach(key => {
      const value = params[key];
      if (value !== null && value !== undefined) {
        httpParams = httpParams.set(key, value);
      }
    });

    return httpParams;
  }
}
