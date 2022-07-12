interface ISwitch {
    add(condition: ICondition): void;
  }
  
  interface ICondition {
    condition: boolean;
    callback?: (argument: boolean) => void;
  }
  
  export class Switch implements ISwitch {
    private conditions: ICondition[] = [];
  
    private resetConditions() {
      this.conditions = [];
    }
  
    public add(condition: ICondition) {
      this.conditions.push(condition);
    }
    public isEmpty() {
      return this.conditions.length === 0;
    }
    public isValid() {
      const validation = this.conditions.every((el) => {
        if (el.callback) {
          return el.callback(el.condition);
        }
        return true;
      });
  
      this.resetConditions();
      return validation;
    }
  }
  