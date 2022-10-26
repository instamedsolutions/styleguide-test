import Button from '@ui/atoms/buttons/button/Button';
import Separator from '@ui/atoms/containers/separator/Separator';
import TextField from '@ui/atoms/fields/text/TextField';
import DropZone from '@ui/molecule/dropZones/dropZone/DropZone';
import Modal from '@ui/molecule/modals/modal/Modal';
import React, { FC } from 'react';

export type UploadModalProps = {
  onDrop: () => void;
  onSubmit: () => void
};

const UploadModal:FC<UploadModalProps> = ({ onDrop, onSubmit }) => (
  <div>
    <Modal title='Uploader un fichier' onClose={() => null} >
      <div className='border-dashed border-gray-100 rounded-lg border-2 p-0.5 mb-6'>
        <DropZone
          className='flex flex-col items-center bg-black/10 p-5 rounded-lg' 
          onUpload={onDrop}
          title='Glissez votre fichier dans cet espace ou'
          link='choisir un fichier'
        />
      </div>
      <TextField label='Nom du fichier' name='Ex: Compte-rendu de circulation' />
      <Separator className='mt-5 mb-5' />
      <Button
        className='w-full'
        color='primary'
        size='large'
        type='submit'
        onClick={onSubmit}>
          Envoyer
      </Button>
    </Modal>
  </div>
);

export default UploadModal;