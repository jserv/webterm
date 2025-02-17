// automatically generated by the FlatBuffers compiler, do not modify
// @generated
extern crate alloc;
extern crate flatbuffers;
use alloc::boxed::Box;
use alloc::string::{String, ToString};
use alloc::vec::Vec;
use core::mem;
use core::cmp::Ordering;
use self::flatbuffers::{EndianScalar, Follow};
use super::*;
pub enum A2rRootOffset {}
#[derive(Copy, Clone, PartialEq)]

pub struct A2rRoot<'a> {
  pub _tab: flatbuffers::Table<'a>,
}

impl<'a> flatbuffers::Follow<'a> for A2rRoot<'a> {
  type Inner = A2rRoot<'a>;
  #[inline]
  unsafe fn follow(buf: &'a [u8], loc: usize) -> Self::Inner {
    Self { _tab: flatbuffers::Table::new(buf, loc) }
  }
}

impl<'a> A2rRoot<'a> {
  pub const VT_ROOT_PAYLOAD_TYPE: flatbuffers::VOffsetT = 4;
  pub const VT_ROOT_PAYLOAD: flatbuffers::VOffsetT = 6;

  #[inline]
  pub unsafe fn init_from_table(table: flatbuffers::Table<'a>) -> Self {
    A2rRoot { _tab: table }
  }
  #[allow(unused_mut)]
  pub fn create<'bldr: 'args, 'args: 'mut_bldr, 'mut_bldr, A: flatbuffers::Allocator + 'bldr>(
    _fbb: &'mut_bldr mut flatbuffers::FlatBufferBuilder<'bldr, A>,
    args: &'args A2rRootArgs
  ) -> flatbuffers::WIPOffset<A2rRoot<'bldr>> {
    let mut builder = A2rRootBuilder::new(_fbb);
    if let Some(x) = args.root_payload { builder.add_root_payload(x); }
    builder.add_root_payload_type(args.root_payload_type);
    builder.finish()
  }


  #[inline]
  pub fn root_payload_type(&self) -> A2rRootPayload {
    // Safety:
    // Created from valid Table for this object
    // which contains a valid value in this slot
    unsafe { self._tab.get::<A2rRootPayload>(A2rRoot::VT_ROOT_PAYLOAD_TYPE, Some(A2rRootPayload::NONE)).unwrap()}
  }
  #[inline]
  pub fn root_payload(&self) -> Option<flatbuffers::Table<'a>> {
    // Safety:
    // Created from valid Table for this object
    // which contains a valid value in this slot
    unsafe { self._tab.get::<flatbuffers::ForwardsUOffset<flatbuffers::Table<'a>>>(A2rRoot::VT_ROOT_PAYLOAD, None)}
  }
  #[inline]
  #[allow(non_snake_case)]
  pub fn root_payload_as_error(&self) -> Option<A2rError<'a>> {
    if self.root_payload_type() == A2rRootPayload::Error {
      self.root_payload().map(|t| {
       // Safety:
       // Created from a valid Table for this object
       // Which contains a valid union in this slot
       unsafe { A2rError::init_from_table(t) }
     })
    } else {
      None
    }
  }

  #[inline]
  #[allow(non_snake_case)]
  pub fn root_payload_as_to_frontend(&self) -> Option<A2rToFrontend<'a>> {
    if self.root_payload_type() == A2rRootPayload::ToFrontend {
      self.root_payload().map(|t| {
       // Safety:
       // Created from a valid Table for this object
       // Which contains a valid union in this slot
       unsafe { A2rToFrontend::init_from_table(t) }
     })
    } else {
      None
    }
  }

}

impl flatbuffers::Verifiable for A2rRoot<'_> {
  #[inline]
  fn run_verifier(
    v: &mut flatbuffers::Verifier, pos: usize
  ) -> Result<(), flatbuffers::InvalidFlatbuffer> {
    use self::flatbuffers::Verifiable;
    v.visit_table(pos)?
     .visit_union::<A2rRootPayload, _>("root_payload_type", Self::VT_ROOT_PAYLOAD_TYPE, "root_payload", Self::VT_ROOT_PAYLOAD, false, |key, v, pos| {
        match key {
          A2rRootPayload::Error => v.verify_union_variant::<flatbuffers::ForwardsUOffset<A2rError>>("A2rRootPayload::Error", pos),
          A2rRootPayload::ToFrontend => v.verify_union_variant::<flatbuffers::ForwardsUOffset<A2rToFrontend>>("A2rRootPayload::ToFrontend", pos),
          _ => Ok(()),
        }
     })?
     .finish();
    Ok(())
  }
}
pub struct A2rRootArgs {
    pub root_payload_type: A2rRootPayload,
    pub root_payload: Option<flatbuffers::WIPOffset<flatbuffers::UnionWIPOffset>>,
}
impl<'a> Default for A2rRootArgs {
  #[inline]
  fn default() -> Self {
    A2rRootArgs {
      root_payload_type: A2rRootPayload::NONE,
      root_payload: None,
    }
  }
}

pub struct A2rRootBuilder<'a: 'b, 'b, A: flatbuffers::Allocator + 'a> {
  fbb_: &'b mut flatbuffers::FlatBufferBuilder<'a, A>,
  start_: flatbuffers::WIPOffset<flatbuffers::TableUnfinishedWIPOffset>,
}
impl<'a: 'b, 'b, A: flatbuffers::Allocator + 'a> A2rRootBuilder<'a, 'b, A> {
  #[inline]
  pub fn add_root_payload_type(&mut self, root_payload_type: A2rRootPayload) {
    self.fbb_.push_slot::<A2rRootPayload>(A2rRoot::VT_ROOT_PAYLOAD_TYPE, root_payload_type, A2rRootPayload::NONE);
  }
  #[inline]
  pub fn add_root_payload(&mut self, root_payload: flatbuffers::WIPOffset<flatbuffers::UnionWIPOffset>) {
    self.fbb_.push_slot_always::<flatbuffers::WIPOffset<_>>(A2rRoot::VT_ROOT_PAYLOAD, root_payload);
  }
  #[inline]
  pub fn new(_fbb: &'b mut flatbuffers::FlatBufferBuilder<'a, A>) -> A2rRootBuilder<'a, 'b, A> {
    let start = _fbb.start_table();
    A2rRootBuilder {
      fbb_: _fbb,
      start_: start,
    }
  }
  #[inline]
  pub fn finish(self) -> flatbuffers::WIPOffset<A2rRoot<'a>> {
    let o = self.fbb_.end_table(self.start_);
    flatbuffers::WIPOffset::new(o.value())
  }
}

impl core::fmt::Debug for A2rRoot<'_> {
  fn fmt(&self, f: &mut core::fmt::Formatter<'_>) -> core::fmt::Result {
    let mut ds = f.debug_struct("A2rRoot");
      ds.field("root_payload_type", &self.root_payload_type());
      match self.root_payload_type() {
        A2rRootPayload::Error => {
          if let Some(x) = self.root_payload_as_error() {
            ds.field("root_payload", &x)
          } else {
            ds.field("root_payload", &"InvalidFlatbuffer: Union discriminant does not match value.")
          }
        },
        A2rRootPayload::ToFrontend => {
          if let Some(x) = self.root_payload_as_to_frontend() {
            ds.field("root_payload", &x)
          } else {
            ds.field("root_payload", &"InvalidFlatbuffer: Union discriminant does not match value.")
          }
        },
        _ => {
          let x: Option<()> = None;
          ds.field("root_payload", &x)
        },
      };
      ds.finish()
  }
}
