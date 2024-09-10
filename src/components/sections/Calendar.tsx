import { parseISO, format } from 'date-fns'
import classNames from 'classnames/bind'
import Section from '../shared/Section'
import { ko } from 'date-fns/locale'
import styles from './Calendar.module.scss'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/style.css'

const cx = classNames.bind(styles)

export default function Calendar({ date }: { date: string }) {
  const weddingDate = parseISO(date)

  return (
    <Section
      title={
        <div className={cx('wrap-header')}>
          <span className={cx('txt-date')}>
            {format(weddingDate, 'yyyy.MM.dd')}
          </span>
          <span className={cx('txt-time')}>
            {format(weddingDate, 'aaa h시 eeee', { locale: ko })}
          </span>
        </div>
      }
    >
      <div className={cx('wrap-calendar')}>
        <DayPicker
          hideNavigation
          mode="single"
          locale={ko}
          month={weddingDate}
          selected={weddingDate}
          required
          formatters={{ formatCaption: () => '' }}
        />
        <div className={cx('prevent-click')} />
      </div>
    </Section>
  )
}
