import classNames from 'classnames/bind'
import Section from '@shared/Section'
import styles from './Video.module.scss'

const cx = classNames.bind(styles)

export default function Video() {
  return (
    <Section className={cx('container')}>
      <video
        controls
        autoPlay={true}
        width={'100%'}
        loop
        muted
        poster="/assets/poster.jpeg"
      >
        <source src="/assets/main.webm" type="video/webm" />
        <source src="/assets/main.mp4" type="video/mp4" />
      </video>
    </Section>
  )
}
