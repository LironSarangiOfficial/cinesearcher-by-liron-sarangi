import React from "react";

import { Modal } from "neetoui";

// Started working on Cinesearcher Phase 2, so did not delete for now

const ClearConfirmationModal = ({ isOpen, onClose, handleClearHistory }) => (
  // MODAL IS INCOMPLETE
  <Modal
    {...{ isOpen, onClose, onContinueClick: handleClearHistory }}
    size="medium"
  >
    <header>
      Are you sure you Want to <strong>Clear All History</strong>. This is an
      irreversible change
    </header>
  </Modal>
);
export default ClearConfirmationModal;
