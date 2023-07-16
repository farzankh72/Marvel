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
        videoData={{
          SD: 'https://academycdn.nobitex.ir/academy/api/file/download/' + 'OXQyGFBxbxodUObMHNSZ',
          HD: 'https://academycdn.nobitex.ir/academy/api/file/download/' + 'OXQyGFBxbxodUObMHNSZ',
          FULL_HD:
            'https://academycdn.nobitex.ir/academy/api/file/download/' + 'OXQyGFBxbxodUObMHNSZ',
        }}
      />
    </Container>
  )
}

export default Index
