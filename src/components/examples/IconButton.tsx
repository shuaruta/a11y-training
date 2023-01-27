import React from 'react';
import styles from '../../styles/Examples.module.css';

export const IconButton = ({
  ariaLabel,
  ariaPressed,
  IconComponent,
  onClick,
}: {
  ariaLabel?: string;
  ariaPressed?: boolean;
  IconComponent: React.ComponentType;
  onClick?: React.MouseEventHandler;
}): JSX.Element => {
  return (
    <button
      className={styles.IconButton}
      aria-label={ariaLabel}
      aria-pressed={ariaPressed}
      onClick={onClick}
    >
      <span className={styles.IconButton__icon}>
        <IconComponent />
      </span>
    </button>
  );
};
