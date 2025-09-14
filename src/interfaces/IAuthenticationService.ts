import { AccessToken } from '../types';

export interface IAuthenticationService {
  authenticateSharePoint(): Promise<AccessToken>;
  authenticateTeams(): Promise<AccessToken>;
  refreshToken(service: 'sharepoint' | 'teams'): Promise<AccessToken>;
  isTokenValid(token: AccessToken): boolean;
}