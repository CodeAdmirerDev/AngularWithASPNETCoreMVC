import { Action, createReducer, on } from "@ngrx/store";
import { counterInitialState, CounterState } from "./counter.state";
import { decrement, increment, reset } from "./counter.actions";

const _counterReducer = createReducer(counterInitialState, 
    
    on(increment,(state)=>{

    return{
        ...state,
        counter: state.counter+1,
    };
}),
 on(decrement,(state)=>{

    return{
        ...state,
        counter: state.counter-1,
    };
}),
 on(reset,(state)=>{

    return{
        ...state,
        counter: 0,
    };
}),

);


export function counterReducer(state: CounterState = counterInitialState, action: Action): CounterState {
  return _counterReducer(state, action);
}
