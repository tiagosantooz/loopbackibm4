import {Entity, model, property} from '@loopback/repository';

@model()
export class TodoModel extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;


  constructor(data?: Partial<TodoModel>) {
    super(data);
  }
}

export interface TodoModelRelations {
  // describe navigational properties here
}

export type TodoModelWithRelations = TodoModel & TodoModelRelations;
