import { createAction } from "@ngrx/store";

export const increment = createAction('Increment');
export const decrement = createAction('decrement');
export const reset = createAction('reset');