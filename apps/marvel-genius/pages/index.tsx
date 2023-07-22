import { Container, Divider } from '@mui/material'
// eslint-disable-next-line @nx/enforce-module-boundaries
import VideoProvider from '../../../libs/nbxplayer/src/lib/VideoProvider'

export function Index() {
  return (
    <Container>
      <VideoProvider
        videoData={
          'https://academycdn.nobitex.ir/academy/api/file/download/' + 'OXQyGFBxbxodUObMHNSZ'
        }
      />
      <Divider />
      <VideoProvider
        poster={'https://nobitex.ir/academy/api/file/download/ZtdNUgGvuyfuBoGuwEvi'}
        videoData={[
          {
            url:
              'https://academycdn.nobitex.ir/academy/api/file/download/' + 'OXQyGFBxbxodUObMHNSZ',
            quality: 'SD',
          },
          {
            url:
              'https://academycdn.nobitex.ir/academy/api/file/download/' + 'OXQyGFBxbxodUObMHNSZ',
            quality: 'HD',
          },
          {
            url:
              'https://academycdn.nobitex.ir/academy/api/file/download/' + 'OXQyGFBxbxodUObMHNSZ',
            quality: 'FHD',
          },
        ]}
      />
    </Container>
  )
}

export default Index
