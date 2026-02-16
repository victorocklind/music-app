/*
[Login Button Click] 
       ↓
Generate PKCE code verifier + challenge
       ↓
Redirect to Spotify authorize URL (with challenge)
       ↓
User logs in → Spotify redirects back with code
       ↓
Exchange code + verifier → access token
       ↓
Store access token in AuthService
       ↓
Use interceptor for API calls
       ↓
Redirect to /discovery

*/
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


const ACCESS_TOKEN_KEY = 'spotify_access_token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  setAccessToken(token: string): void {
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
  }

  getAccessToken(): string | null {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
  }

  clearAccessToken(): void {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
  }

  isAuthenticated(): boolean {
    return !!this.getAccessToken();
  }

  login(): void {
  const scopes = [
    'user-read-private',
    'playlist-modify-public',
    'playlist-modify-private'
  ].join(' ');

  const params = new URLSearchParams({
    response_type: 'code',
    client_id: environment.spotifyClientId,
    scope: scopes,
    redirect_uri: environment.redirectUri
  });

  window.location.href =
    `${environment.spotifyAccountsUrl}/authorize?${params.toString()}`;
  }


}
