/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import './directory.scss';

import DirectoryContext from '../../contexts/directory/directory.context';

import MenuItem from '../menu-item/menu-item';

const Directory = () => {
  const sections = useContext(DirectoryContext);
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => {
        return <MenuItem key={id} {...otherSectionProps} />;
      })}
    </div>
  );
};

export default Directory;
