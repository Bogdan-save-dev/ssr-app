import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'

export interface PtagProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: ReactNode
  size: 's' | 'm' | 'l'
}
