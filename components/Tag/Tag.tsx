import React from 'react'
import { TagProps } from './Tag.props'
import cn from 'classnames'
import styles from './Tag.module.css'

export const Tag = ({
  color = 'ghost',
  size = 's',
  className,
  href,
  children,
  ...props
}: TagProps): JSX.Element => {
  const stylesObj = {
    [styles.s]: size === 's',
    [styles.m]: size === 'm',
    [styles.ghost]: color === 'ghost',
    [styles.primary]: color === 'primary',
    [styles.green]: color === 'green',
    [styles.red]: color === 'red',
    [styles.grey]: color === 'grey',
  }

  return (
    <div className={cn(styles.tag, className, stylesObj)} {...props}>
      {href ? <a href={href}> {children} </a> : <>{children} </>}
    </div>
  )
}
