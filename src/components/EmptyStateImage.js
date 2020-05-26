import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    backgroundColor: '#f6f6f0',
  },
}));

export const EmptyStateImage = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <PhotoCameraIcon />
    </Box>
  );
};
