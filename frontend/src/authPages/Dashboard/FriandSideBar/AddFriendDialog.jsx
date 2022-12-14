import React, { useState, useEffect } from 'react'
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  DialogActions,
} from '@mui/material'
import Typography from '@mui/material/Typography'
import { validateMail } from '../../../shared/utils/validators'
import InputWithLabel from '../../../shared/components/InputWithLabel'
import CustomPrimaryButton from '../../../shared/components/CustomPrimaryButton'
import { connect } from 'react-redux'
import { getActions } from '../../../store/actions/friendActions'

const AddFriendDialog = ({
  isDialogOpen,
  closeDialogHandler,
  sendFriendInvitation = () => {},
}) => {
  const [mail, setMail] = useState('')
  const [isFormValid, setIsFormValid] = useState('')

  const handleSendInvitation = () => {
    sendFriendInvitation(
      {
        targetMailAddress: mail,
      },
      handleCloseDialog,
    )
  }

  const handleCloseDialog = () => {
    closeDialogHandler()
    setMail('')
  }
  useEffect(() => {
    setIsFormValid(validateMail(mail))
  }, [mail, setIsFormValid])

  return (
    <div>
      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>
          <Typography>Invite Friend</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography>Enter you'r friend e-mail address</Typography>
          </DialogContentText>

          <InputWithLabel
            label="Mail"
            type="text"
            value={mail}
            setValue={setMail}
            placeholder="Enter e-mail address"
          />
        </DialogContent>
        <DialogActions>
          <CustomPrimaryButton
            onClick={handleSendInvitation}
            disabled={!isFormValid}
            label="Send"
            additionalStyles={{
              marginLeft: '15px',
              marginRight: '15px',
              marginBottom: '10px',
            }}
          />
        </DialogActions>
      </Dialog>
    </div>
  )
}

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  }
}

export default connect(null, mapActionsToProps)(AddFriendDialog)
