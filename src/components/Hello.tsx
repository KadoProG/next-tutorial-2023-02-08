import { FC } from "react";

type Props = {
  message?: string
}

const Hello: FC<Props> = (props) => {
  return (<div>{props.message}</div>)
}

export default Hello