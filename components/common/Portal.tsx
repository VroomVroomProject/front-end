import React from 'react';
import { createPortal } from 'react-dom';
import Modal from './Modal';

function Portal({}) {
  if (typeof window !== 'undefined') {
    return <></>;
  }
  return createPortal(<Modal />, document.getElementById('modal')!);
}

export default Portal;
