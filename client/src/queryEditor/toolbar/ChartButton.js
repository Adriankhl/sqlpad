import ChartIcon from 'mdi-react/ChartBarIcon';
import React, { useState } from 'react';
import IconButton from '../../common/IconButton.tsx';
import Modal from '../../common/Modal.tsx';
import ChartInputsContainer from '../ChartInputsContainer';
import ChartTypeSelect from '../ChartTypeSelect';
import Button from '../../common/Button.tsx';
import Spacer from '../../common/Spacer.tsx';

function ChartButton() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <IconButton
        tooltip="Configure visualization"
        onClick={() => setVisible(true)}
      >
        <ChartIcon />
      </IconButton>
      <Modal
        width={500}
        title="Configure visualization"
        visible={visible}
        onClose={() => setVisible(false)}
      >
        <ChartTypeSelect />
        <Spacer size={2} />
        <ChartInputsContainer />
        <Spacer size={2} />
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant="primary" onClick={() => setVisible(false)}>
            OK
          </Button>
        </div>
      </Modal>
    </>
  );
}

export default React.memo(ChartButton);
