import { Htag, Button, Tag, Ptag } from '../components'

export default function Home(): JSX.Element {
  return (
    <div>
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
    </div>
  )
}
