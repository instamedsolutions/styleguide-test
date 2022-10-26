import Icon from "@ui/atoms/icons/icon/Icon";
import P from "@ui/atoms/texts/base/P";
import Link from "@ui/atoms/texts/link/Link";
import React, { FC } from "react";

export type DropZoneProps = {
  onUpload: () => void;
  title: string;
  link: string;
  className?:string
  };

const DropZone:FC<DropZoneProps> = ({
  onUpload, 
  title = "Glissez votre fichier dans cet espace ou",
  link = "choisir un fichier",
  className
}) => (
  <div className={className}>
    <Icon className='mb-4 text-6xl text-black/80' icon='folder' />
    <P> {title} </P>
    <Link onClick={onUpload}>{link}</Link>
  </div>
);

export default DropZone;