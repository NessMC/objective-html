import { Parameter } from './param';

export interface Block {
  name: string,
  params?: Array<Parameter>,
}