import styles from './Footer.module.css'
import { FooterProps } from './Footer.props'
import cn from 'classnames'
import { format } from 'date-fns'

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <p> {format(new Date(), 'yyyy')} - all rights reserved</p>
      <a href="#">User Agreement</a>
      <a href="#">Privacy policy</a>
    </footer>
  )
}
