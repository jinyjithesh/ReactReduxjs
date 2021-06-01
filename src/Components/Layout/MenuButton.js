import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import EditIcon from '@material-ui/icons/Edit';
import PhoneIphoneOutlinedIcon from '@material-ui/icons/PhoneIphoneOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import IconButton from '@material-ui/core/IconButton';
export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button type="button" aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
    ...
      </Button>
      <Menu
       
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}><PhoneIphoneOutlinedIcon/>Add Device</MenuItem>
        <MenuItem onClick={handleClose}><EditIcon />Edit Details</MenuItem>
        <MenuItem onClick={handleClose}> <DeleteOutlinedIcon />Delete Child</MenuItem>
      </Menu>
    </div>
  );
}