import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import { colorNames } from 'config/variables';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    backgroundColor: colorNames.emptyStateBackground,
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
