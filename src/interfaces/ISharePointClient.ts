import { SharePointItem } from '../types';

export interface ISharePointClient {
  getListItems(siteUrl: string, listName: string, filter?: string): Promise<SharePointItem[]>;
  getListItemsSince(siteUrl: string, listName: string, since: Date): Promise<SharePointItem[]>;
  validateSiteAccess(siteUrl: string): Promise<boolean>;
}