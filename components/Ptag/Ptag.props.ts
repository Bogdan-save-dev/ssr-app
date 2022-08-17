import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'

export interface PtagProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode
  size: 's' | 'm' | 'l'
}
