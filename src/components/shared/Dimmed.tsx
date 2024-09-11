import styles from './Dimmed.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export default function Dimmed({ children }: { children: React.ReactNode }) {
  return <div className={cx('dimmed')}>{children}</div>
}
