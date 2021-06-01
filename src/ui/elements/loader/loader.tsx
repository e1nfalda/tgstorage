import { h } from 'preact'
import type { FunctionComponent as FC } from 'preact'
import cn from 'classnames'

import styles from './loader.styl'

type Props = {
  class?: string
  brand?: boolean
  grey?: boolean
}

export const Loader: FC<Props> = ({
  class: className,
  brand,
  grey
}) => {

  return (
    <div class={cn(
      className,
      styles.root,
      brand && styles._brand,
      grey && styles._grey
    )}/>
  )
}