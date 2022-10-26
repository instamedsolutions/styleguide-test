import React, { FC, ReactChild } from "react";
import ModalHeader from "@ui/molecule/modalHeaders/modalHeader/ModalHeader";
import Separator from "@ui/atoms/containers/separator/Separator";

export type ModalProps = {
    children: ReactChild | ReactChild[];
    title: string;
    onClose: () => void;
    className?: string
  };

const Modal:FC<ModalProps> = ({ children, title, onClose, className }) => (
  <div className={className}>
    <ModalHeader 
      title={title}
      onClose={onClose}
      className='flex flex-row justify-between items-center' />
    <Separator className='mt-5 mb-3' />
    {children}
  </div>
);

export default Modal;