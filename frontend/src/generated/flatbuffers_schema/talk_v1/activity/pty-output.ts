// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import { VectorTable } from '../vector-table.js';


export enum PtyOutput {
  NONE = 0,
  Output = 1
}

export function unionToPtyOutput(
  type: PtyOutput,
  accessor: (obj:VectorTable) => VectorTable|null
): VectorTable|null {
  switch(PtyOutput[type]) {
    case 'NONE': return null; 
    case 'Output': return accessor(new VectorTable())! as VectorTable;
    default: return null;
  }
}

export function unionListToPtyOutput(
  type: PtyOutput, 
  accessor: (index: number, obj:VectorTable) => VectorTable|null, 
  index: number
): VectorTable|null {
  switch(PtyOutput[type]) {
    case 'NONE': return null; 
    case 'Output': return accessor(index, new VectorTable())! as VectorTable;
    default: return null;
  }
}
