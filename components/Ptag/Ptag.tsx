import React from 'react'
import cn from 'classnames'
import styles from './Ptag.module.css'
import { PtagProps } from './Ptag.props'

export const Ptag = ({
  size = 'm',
  children,
  className,
  ...props
}: PtagProps): JSX.Element => {
  return (
    <p
      className={cn(styles.pTag, className, {
        [styles.s]: size == 's',
        [styles.m]: size == 'm',
        [styles.l]: size == 'l',
      })}
      {...props}
    >
      {children}
    </p>
  )
}
