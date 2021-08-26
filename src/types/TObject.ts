export type TObject = { [p: string]: any; }
export type TObjectString = { [p: string]: string; }
export type TObjectBool = { [p: string]: boolean; }
export type TObjectMix = TObjectBool | TObjectString | TObject;
export type TObjectCustom<T> = { [p: string]: T }
