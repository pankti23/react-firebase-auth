import React from 'react';

import { withFirebase } from '../Firebase';

import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

const SignOutButton = ({ firebase }) => (
  // <button type="button" onClick={firebase.doSignOut}>
  //   Sign Out
  // </button>
   <PowerSettingsNewIcon onClick={firebase.doSignOut} />
);

export default withFirebase(SignOutButton);
