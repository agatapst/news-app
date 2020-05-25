import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  content: PropTypes.string.isRequired,
};

export const RawHtmlParagraph = ({ content }) => (
  <div dangerouslySetInnerHTML={{ __html: content }} />
);

RawHtmlParagraph.propTypes = propTypes;
