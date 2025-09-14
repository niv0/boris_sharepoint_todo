import { SharePointConfig, TeamsConfig, FieldMapping, ValidationResult } from '../types';

export interface IConfigurationManager {
  getSharePointConfig(): SharePointConfig;
  getTeamsConfig(): TeamsConfig;
  getFieldMappings(): FieldMapping[];
  validateConfiguration(): ValidationResult;
}