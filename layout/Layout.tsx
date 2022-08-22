import { Footer } from './Footer/Footer'
import { Header } from './Header/Header'
import { LayoutProps } from './Layout.props'
import { Sidebar } from './Sidebar/Sidebar'

import styles from './Layout.module.css'
import { FunctionComponent } from 'react'

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <div>
        <Sidebar />
        <div>{children}</div>
      </div>
      <Footer />
    </>
  )
}

export const withLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>,
) => {
  return function WithLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    )
  }
}
