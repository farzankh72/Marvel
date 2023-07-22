import { Container, Divider } from '@mui/material'
// eslint-disable-next-line @nx/enforce-module-boundaries
import VideoProvider from '../../../libs/nbxplayer/src/lib/VideoProvider'

export function Index() {
  return (
    <Container>
      <VideoProvider
        poster={'https://nobitex.ir/academy/api/file/download/ZtdNUgGvuyfuBoGuwEvi'}
        videoData={'https://nobitex.ir/academy/api/file/download/UjYJHOZYPKnuzopPluZe'}
      />
      <Divider />
      <VideoProvider
        poster={'https://nobitex.ir/academy/api/file/download/ZtdNUgGvuyfuBoGuwEvi'}
        videoData={[
          {
            url: 'https://nobitex.ir/academy/api/file/download/UjYJHOZYPKnuzopPluZe',
            quality: 'SD',
          },
          {
            url: 'https://nobitex.ir/academy/api/file/download/YvTqNcoLiydduRCwHizM',
            quality: 'HD',
          },
          {
            url: 'https://nobitex.ir/academy/api/file/download/SDyKdGLPYwuJZLFDYBoD',
            quality: 'FHD',
          },
        ]}
      />
    </Container>
  )
}

export default Index
