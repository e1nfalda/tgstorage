import { h } from 'preact'
import type { FunctionComponent as FC } from 'preact'
import { useRef } from 'preact/hooks'
import cn from 'classnames'

import { Menu } from '~/ui/elements/menu'
import type { Props as MenuProps } from '~/ui/elements/menu'

import styles from './sidebar-title.styl'

type Props = {
  menu?: MenuProps | null
  disabled?: boolean
}

export const SidebarTitle: FC<Props> = ({
  children,
  menu,
  disabled
}) => {
  const parentRef = useRef(null)

  return (
    <div
      class={cn(
        styles.root,
        disabled && styles._disabled
      )}
      ref={parentRef}
    >
      <h2 class={styles.title}>
        {children}
      </h2>
      {(menu && !disabled) && (
        <Menu
          {...menu}
          class={styles.menu}
          parentRef={parentRef}
          horizontal
        />
      )}
    </div>
  )
}