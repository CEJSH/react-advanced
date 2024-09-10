import classNames from 'classnames'
import Section from '@shared/Section'
import styles from './Video.module.scss'

const cx = classNames.bind(styles)

export default function Video() {
  return (
    <Section className={cx('container')}>
      <video
        controls
        autoPlay={true}
        src="/assets/main.mp4"
        width={'100%'}
        loop={true}
        muted={true}
        poster="/assets/poster.jpeg"
      >
        {/* <source src="/assets/main.mp4" type="video/mp4" /> */}
      </video>
    </Section>
  )
}
