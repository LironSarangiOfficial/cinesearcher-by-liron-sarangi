import React from "react";

import { Button, Modal, Typography } from "@bigbinary/neetoui";
import { t } from "i18next";

const DeleteConfirmationModal = ({ isOpen, onClose, movieTitle }) => (
  <Modal {...{ isOpen, onClose }} size="medium">
    <div>
      <Typography id="dialog1Title" style="h2">
        {t("history.deleteItem", { movieTitle })}
      </Typography>
    </div>
    <div className="space-y-2">
      <Typography lineHeight="normal" style="body2">
        {t}
      </Typography>
    </div>
    <div className="space-x-2">
      <Button
        label="Cancel"
        style="tertiary"
        onClick={function noRefCheck() {}}
      />
      <Button label="Continue" onClick={function noRefCheck() {}} />
    </div>
  </Modal>
);

export default DeleteConfirmationModal;
