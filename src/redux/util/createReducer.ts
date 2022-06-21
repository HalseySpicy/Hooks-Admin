import produce from "immer";
import { ActionFromReducer } from "redux";

export const createReducer = <State, Payload>(
	cases: { [key: string]: (s: State, action: ActionFromReducer<Payload>) => State | any } = {},
	defaultState: State
) => {
	return (state = defaultState, action: ActionFromReducer<Payload>) =>
		produce(state, (draft: State) => {
			if (action && action.type && cases[action.type] instanceof Function) {
				cases[action.type](draft, action);
			}
		});
};
