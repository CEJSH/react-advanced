import { parseISO, format } from 'date-fns'
import Section from '@shared/Section'
import classNames from 'classnames/bind'
import styles from './Heading.module.scss'
const cx = classNames.bind(styles)
const DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]
export default function Heading({ date }: { date: string }) {
  const weddingDate = parseISO(date)
  return (
    <Section className={cx('container')}>
      <div className={cx('txt-date')}>{format(weddingDate, 'yy.MM.dd')}</div>
      <div className={cx('txt-day')}>{DAYS[weddingDate.getDay()]}</div>
    </Section>
  )
}
