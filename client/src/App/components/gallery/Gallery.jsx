import React from 'react'
import {baseUrl} from '../../../config'
import {useSelector} from 'react-redux'
import ImageGallery from 'react-image-gallery'

const imagePath = img => baseUrl + '/' + img

const Gallery = () => {
  const works = useSelector(state => state.service.works)
  const images = works.map(el => ({original: imagePath(el.image), thumbnail: imagePath(el.image)}))

  return (
    <div className='gallery-wrapper'>
      <ImageGallery
        showPlayButton={false}
        showFullscreenButton={false}
        disableThumbnailScroll={false}
        items={images}>
      </ImageGallery>
    </div>
  )
}

export default Gallery
