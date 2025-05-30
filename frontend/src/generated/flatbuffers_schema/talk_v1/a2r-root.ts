// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { A2rRootPayload, unionToA2rRootPayload, unionListToA2rRootPayload } from './a2r-root-payload.js';


export class A2rRoot {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):A2rRoot {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsA2rRoot(bb:flatbuffers.ByteBuffer, obj?:A2rRoot):A2rRoot {
  return (obj || new A2rRoot()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsA2rRoot(bb:flatbuffers.ByteBuffer, obj?:A2rRoot):A2rRoot {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new A2rRoot()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

rootPayloadType():A2rRootPayload {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readUint8(this.bb_pos + offset) : A2rRootPayload.NONE;
}

rootPayload<T extends flatbuffers.Table>(obj:any):any|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__union(obj, this.bb_pos + offset) : null;
}

static startA2rRoot(builder:flatbuffers.Builder) {
  builder.startObject(2);
}

static addRootPayloadType(builder:flatbuffers.Builder, rootPayloadType:A2rRootPayload) {
  builder.addFieldInt8(0, rootPayloadType, A2rRootPayload.NONE);
}

static addRootPayload(builder:flatbuffers.Builder, rootPayloadOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, rootPayloadOffset, 0);
}

static endA2rRoot(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createA2rRoot(builder:flatbuffers.Builder, rootPayloadType:A2rRootPayload, rootPayloadOffset:flatbuffers.Offset):flatbuffers.Offset {
  A2rRoot.startA2rRoot(builder);
  A2rRoot.addRootPayloadType(builder, rootPayloadType);
  A2rRoot.addRootPayload(builder, rootPayloadOffset);
  return A2rRoot.endA2rRoot(builder);
}
}
