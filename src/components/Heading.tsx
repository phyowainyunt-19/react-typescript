type HeadingProps = {
  children: string
}
const Heading = (props: HeadingProps) => {
  return (
    <div><h3>{props.children}</h3></div>
  )
}

export default Heading