import { Address, Syndicate } from './condo.models.js';

export const defaultAddress: Address = {
  street1: '111 Av King',
  street2: '',
  postalCode: '111111',
  state: 'QC',
  country: 'CA',
  poBox: '',
};

export const defaultCondoSyndicate: Syndicate = {
  name: 'Condo ABC',
  addresses: [defaultAddress],
  buildings: [],
  users: [],
};
