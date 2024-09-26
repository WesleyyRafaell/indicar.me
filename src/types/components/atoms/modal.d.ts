import React from 'react';

export interface IModalProps {
  children?: React.ReactNode;
  title?: string;
  open: boolean;
  setOpen: (open: boolean) => void;
}
