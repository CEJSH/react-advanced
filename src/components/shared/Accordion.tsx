import classNames from 'classnames/bind'
import styles from './Accordion.module.scss'
import { PropsWithChildren, useState } from 'react'

const cx = classNames.bind(styles)

interface AccordionProps {
  label: string
}
export default function Accordion({
  label,
  children,
}: PropsWithChildren<AccordionProps>) {
  const [expanded, setExpanded] = useState(false)
  const handleToggle = () => {
    setExpanded((prev) => !prev)
  }
  return (
    <div className={cx(['wrap-accordion', expanded ? 'open' : ''])}>
      <div className={cx('wrap-header')} onClick={handleToggle}>
        <span>{label}</span>
        <IconArrowDown className={cx('ico-arrow-down')} />
      </div>
      <div className={cx('wrap-content')}>{children}</div>
    </div>
  )
}

function IconArrowDown({ className }: { className: string }) {
  return (
    <svg className={className} id="Layer_1" version="1.1" viewBox="0 0 64 64">
      <g>
        <g id="Icon-Chevron-Left" transform="translate(237.000000, 335.000000)">
          <polyline
            id="Fill-35"
            points="-218.7,-308.6 -216.7,-310.6 -205,-298.8 -193.3,-310.6 -191.3,-308.6 -205,-294.9      -218.7,-308.6    "
          />
        </g>
      </g>
    </svg>
  )
}
