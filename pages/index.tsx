import { GetStaticProps } from 'next'
import { Htag, Button, Tag, Ptag, Rating } from '../components'
import { useState } from 'react'
import { withLayout } from '../layout/Layout'
import axios from 'axios'
import { MenuItem } from '../interrfaces/menu.interface'

function Home({ menu, firstCategory }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(4)
  return (
    <>
      <Htag tag="h2">Text</Htag>
      <Button appearance="ghost">Button</Button>
      <Button appearance="primary" arrow="down">
        Button
      </Button>
      <Ptag size="l">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta eius,
        esse expedita mollitia nisi enim odio facilis amet assumenda velit
        consequatur, necessitatibus architecto quia. Illo, nihil. Quibusdam
        tenetur voluptate minima.
      </Ptag>
      <Tag color="green">Tag</Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
      <ul>
        {menu.map((m) => (
          <li key={m._id.secondCategory}> {m._id.secondCategory} </li>
        ))}
      </ul>
    </>
  )
}

export default withLayout(Home)

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
    {
      firstCategory,
    },
  )
  return {
    props: {
      menu,
      firstCategory,
    },
  }
}

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[]
  firstCategory: number
}
