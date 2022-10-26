import Icon from "@ui/atoms/icons/icon/Icon";
import H2 from "@ui/atoms/texts/base/H2";
import React, { FC } from "react";

export type ModalHeaderProps = {
  title: string;
  onClose: () => void;
  className?: string
};

const ModalHeader:FC<ModalHeaderProps> = ({ title, onClose, className }) => (
  <div className={className}>
    <H2>{title}</H2>
    <button onClick={onClose}>
      <Icon icon='close' />
    </button>
  </div>
);

export default ModalHeader;