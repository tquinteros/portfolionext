"use client";
import React from 'react';
import { useModal } from '@/src/contexts/ModalContext';
import CvDialog from './CvModal/CvDialog';

const ExampleModalTrigger: React.FC = () => {
  const { openModal } = useModal();

  return (
    <div className="p-4 bg-gray-800 rounded-lg">
      <CvDialog />
      <h3 className="text-white text-lg mb-2">Example Modal Trigger</h3>
      <p className="text-gray-300 mb-4">
        This component demonstrates how to open the CV modal from anywhere in your app using the context with shadcn Dialog.
      </p>
      <button
        onClick={openModal}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
      >
        Open CV Modal
      </button>
    </div>
  );
};

export default ExampleModalTrigger; 