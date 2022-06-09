/**
 *
 * Condo Data Models
 *
 */

/**
 *
 * Syndicate / Association
 *
 */

export type Syndicate = {
  name: string;
  addresses: Address[];
  buildings: Building[];
  users: User[];
};

/**
 *
 * User Management
 *
 */

export enum USER_TYPE {
  PROMOTER,
  GENERAL_CONTRACTOR,
  CONTRACTOR,
  MANAGER,
  OWNER,
  RENTER,
}

export type User = {
  email: string;
  type: USER_TYPE;
  profile?: UserProfile;
};

export type UserProfile = {
  firstName: string;
  lastName: string;
};

/**
 *
 * Communication
 *
 */

export type Alert = {
  severity: 'info' | 'alert';
};

/**
 *
 * Building Management
 *
 */

export type Address = {};

export type Building = {
  name: string;
  addresses: Address[];
  units: Unit[];
  equipments: Equipment[];
  maintenanceSchedule: MaintenanceSchedule;
  keyRegistry: KeyRegistry;
};

export type Unit = {
  name: string;
  floor: string;
};

export type KeyRegistry = {
  keys: Key[];
};

export enum KEY_TYPE {
  DOOR,
  EQUIPMENT,
  PAD_LOCK,
  KEYS_CASE,
}

export type Key = {
  name: string;
  description: string;
  type: KEY_TYPE;
  lockId: string;
};

/**
 *
 * Maintenance
 *
 */

export type MaintenanceSchedule = {
  jobs: MaintenanceJob[];
};

export type MaintenanceJob = {
  name: string;
  type: MAINTENANCE_TYPE;
  supplier: Supplier;
  scheduledStartDate: Date;
  scheduledStartTime: number; // 8am
  scheduledEndDate: Date;
  scheduledEndTime: number; // 8am
  actualStartDate: Date;
  actualStartTime: number; // 8am
  actualEndDate: Date;
  actualEndTime: number; // 8am
  recurrenceType: MAINTENANCE_RECCURENCE_TYPE;
  reccurence: MaintenanceReccurence;
  equipments: Equipment[];
};

export enum MAINTENANCE_RECCURENCE_TYPE {
  ONCE,
  RECURRING,
}

export type MaintenanceReccurence = {
  repeatEveryType: 'day' | 'week' | 'month' | 'year';
  repeatEvery: number; // every 2 week
  repeatDailyOn: number; // time 23 = 23pm
  repeatWeeklyOn: string; // every monday
  repeatMontlyOn: number; // date of the month
  ends?: Date; // reccurence programmed end
  endsAfter: number; // after n occurence
};

export enum MAINTENANCE_TYPE {
  ROUTINE,
  PREVENTIVE,
  CORRECTIVE,
}

/**
 *
 * Equipment
 *
 */

export type Equipment = {
  name: string;
  status: EQUIPMENT_STATUS;
  condition: EQUIPMENT_CONDITION;
  manufacturer: Supplier;
  model: string;
  serialNumber: string;
  description?: string;
  purchaseDate: Date;
  location: Unit;
  locationDescription: string;
  medias: Media[];
  invoices: Invoice[];
  documentation: Documentation[];
  maintenance: EquipmentMaintenance[];
};

export enum EQUIPMENT_STATUS {
  OK,
  NOT_OK,
}

export enum EQUIPMENT_CONDITION {
  OPTIMAL,
  SUB_OPTIMAL,
}

export enum EQUIPMENT_ACTION {
  NEEDS_REPAIR,
  NEEDS_FURTHER_INFO,
}

export enum EQUIPMENT_ACTION_SEVERITY {
  URGENT,
  HIGH,
  LOW,
}

export type EquipmentMaintenance = {
  date: Date;
  description: string;
  action: EQUIPMENT_ACTION;
  severity: EQUIPMENT_ACTION_SEVERITY;
  medias: Media[];
};

/**
 *
 * Suppliers
 *
 */

export type Supplier = {
  name: string;
  website: string;
  addresses: Address[];
  originalBuildingSupplier: boolean;
};

/**
 *
 * Documentation
 *
 */

export enum DOCUMENTATION_TYPE {
  DOCUMENT,
  WEBSITE,
  PDF,
}

export type Documentation = {
  type: DOCUMENTATION_TYPE;
  link?: string;
  attachments?: Attachment[];
  data?: string;
};

/**
 *
 * Accounting
 *
 */

export type Invoice = {};

/**
 *
 * Medias
 *
 */

export enum MEDIA_TYPE {
  PHOTO,
  VIDEO,
}

export type Media = {
  filename: string;
  type: MEDIA_TYPE;
  data: string;
};

export enum ATTACHMENT_TYPE {
  PDF,
}

export type Attachment = {
  filename: string;
  type: ATTACHMENT_TYPE;
  data: string;
};

/**
 *
 * Role-based Access Control (RBAC)
 *
 */

export type Role = {
  scope: string;
  rules: Rule;
};

export enum RULE_CATEGORY {
  SYNDICATE,
  USER,
  BUILDING,
  COMMUNICATION,
  MAINTENANCE,
  // ...
}

export enum API_NAMES {
  AUTH = 'auth',
}

export enum MODEL_NAMES {
  USER = 'user',
  BUILDING = 'building',
  KEY_REGISTRY = 'keyRegistry',
}

export type Rule = {
  /**
   * Name of the resource this rule applies to
   */
  resource: API_NAMES | MODEL_NAMES;
  /**
   * Used to group rules into category in the platform admin
   */
  category: RULE_CATEGORY;
  access: RULE_ACCESS;
};

export enum RULE_ACCESS {
  READ,
  UPDATE,
  LINK,
  DELETE,
}
