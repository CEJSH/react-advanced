import classNames from 'classnames/bind'
import { useState } from 'react'
import Section from '@shared/Section'
import styles from './ImageGallery.module.scss'
import ImageViewer from '../ImageViewer'
const cx = classNames.bind(styles)

export default function ImageGallery({ images }: { images: string[] }) {
  const [selectedIdx, setSelectedIdx] = useState<number>(-1)
  const open = selectedIdx > -1
  const handleSelectedImage = (idx: number) => {
    setSelectedIdx(idx)
  }
  const handleClose = () => {
    setSelectedIdx(-1)
  }
  return (
    <>
      <Section title="사진첩">
        <ul className={cx('wrap-images')}>
          {images.map((src, idx) => (
            <li
              key={idx}
              className={cx('wrap-image')}
              onClick={() => {
                handleSelectedImage(idx)
              }}
            >
              <img src={src} alt={`galleryImage`} />
            </li>
          ))}
        </ul>
      </Section>
      <ImageViewer
        images={images}
        open={open}
        selectedIdx={selectedIdx}
        onClose={handleClose}
      />
    </>
  )
}
