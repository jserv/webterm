// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { A2fErrorType } from './a2f-error-type.js';


export class A2fError {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):A2fError {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsA2fError(bb:flatbuffers.ByteBuffer, obj?:A2fError):A2fError {
  return (obj || new A2fError()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsA2fError(bb:flatbuffers.ByteBuffer, obj?:A2fError):A2fError {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new A2fError()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

errorType():A2fErrorType {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readUint8(this.bb_pos + offset) : A2fErrorType.ErrorUnspecified;
}

errorMessage():string|null
errorMessage(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
errorMessage(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

static startA2fError(builder:flatbuffers.Builder) {
  builder.startObject(2);
}

static addErrorType(builder:flatbuffers.Builder, errorType:A2fErrorType) {
  builder.addFieldInt8(0, errorType, A2fErrorType.ErrorUnspecified);
}

static addErrorMessage(builder:flatbuffers.Builder, errorMessageOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, errorMessageOffset, 0);
}

static endA2fError(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createA2fError(builder:flatbuffers.Builder, errorType:A2fErrorType, errorMessageOffset:flatbuffers.Offset):flatbuffers.Offset {
  A2fError.startA2fError(builder);
  A2fError.addErrorType(builder, errorType);
  A2fError.addErrorMessage(builder, errorMessageOffset);
  return A2fError.endA2fError(builder);
}
}
