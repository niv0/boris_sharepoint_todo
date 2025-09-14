// Core data models and interfaces

export interface AccessToken {
  token: string;
  expiresAt: Date;
  refreshToken?: string;
}

export interface SharePointItem {
  id: string;
  title: string;
  description?: string;
  dueDate?: Date;
  assignedTo?: string[];
  status: string;
  priority?: 'Low' | 'Medium' | 'High';
  createdDate: Date;
  modifiedDate: Date;
  etag: string;
}

export interface TeamsTodo {
  id?: string;
  title: string;
  body?: string;
  dueDateTime?: Date;
  assignedTo?: string[];
  importance: 'low' | 'normal' | 'high';
  status: 'notStarted' | 'inProgress' | 'completed';
  sourceId: string; // Reference to SharePoint item
}

export interface SharePointConfig {
  siteUrl: string;
  lists: SharePointListConfig[];
  clientId: string;
  tenantId: string;
}

export interface SharePointListConfig {
  name: string;
  statusField: string;
  triggerValues: string[];
  fields: string[];
}

export interface TeamsConfig {
  clientId: string;
  tenantId: string;
  todoListId?: string;
}

export interface FieldMapping {
  sharePointField: string;
  teamsProperty: string;
  transformer?: (value: any) => any;
}

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export interface RetryConfig {
  maxAttempts: number;
  baseDelay: number;
  maxDelay: number;
  backoffMultiplier: number;
}

export interface SyncState {
  lastSyncTime: Date;
  processedItems: Map<string, string>; // SharePoint ID -> Teams Todo ID
}