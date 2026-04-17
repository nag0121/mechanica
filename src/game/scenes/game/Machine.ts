export interface IMachine {
    state : TMachineState
    action() : void
    getState() : TMachineState
    setState(value : TMachineState ) : void
}

export type TMachineState = 'in-use' | 'no-charge' | 'idle';

export class Machine implements IMachine {
    state: TMachineState

    constructor() {
        this.state = "idle";
    }

    action(): void {
        throw new Error("Method not implemented.")
    }
    
    getState(): TMachineState {
        return this.state;
    }

    setState(value: TMachineState) {
        this.state = value;
    }
    
}