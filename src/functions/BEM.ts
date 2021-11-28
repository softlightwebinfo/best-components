import { TObjectMix } from "../types/TObject";

export enum ITBem {
  DEFAULT = '-',
  MODIFIER = '--',
  BLOCK = "",
  CHILD = "_"
}

export class BEM {
  private _parent: string;
  private _classNames: TObjectMix;
  private _listClassNames: string[] = [];

  constructor(parent: string, classNames: TObjectMix) {
    this._parent = parent;
    this._classNames = classNames;
    this._listClassNames.push(parent);
  }

  public GetParent(): string {
    return this._parent;
  }

  toString(): string {
    return Object.entries(this._classNames).reduce((previousValue, currentValue) => {
      if (currentValue[1]) {
        if (["string", "number"].includes(typeof currentValue[1])) {
          previousValue.push(this._parent + ITBem.MODIFIER + currentValue[0] + ITBem.DEFAULT + currentValue[1]);
        } else if (typeof currentValue[1] == "boolean") {
          previousValue.push(this._parent + ITBem.MODIFIER + currentValue[0]);
        }
      }
      return previousValue;
    }, [...this._listClassNames]).join(" ");
  }

  Append(className?: string) {
    if (!className) return this;
    this._listClassNames.push(className);
    return this;
  }

  Children(name: string, extra: string = ""): string {
    return `${ this._parent }__${ name }${ extra ? ` ${ extra }` : '' }`;
  }

  Modifier(children: string, modifier: string, active: boolean, extra: string = "") {
    let data = [`${ this._parent }__${ children }`];

    if (active) {
      data.push(`${ this._parent }__${ children }--${ modifier }`);
    }
    if (extra) {
      data.push(extra);
    }
    return data.join(" ");
  }
}
