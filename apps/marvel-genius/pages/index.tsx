import axios from "axios";
import {useEffect, useState} from "react";
import {Container, Divider} from "@mui/material";
import VideoProvider from "../../../libs/nbxplayer/src/lib/VideoProvider";

export function Index() {

  const [data, setData] = useState()

  async function fetchData() {
    const data = await axios.get('https://nobitex.ir/academy/api/course?uniqueName=crs-4308')
    setData(data.data.items[0]?.trailer?.fileKey)
  }

  useEffect(() => {
    fetchData().then()
  }, [])

  return (
    <Container>
      <VideoProvider videoData={'https://academycdn.nobitex.ir/academy/api/file/download/' + 'OXQyGFBxbxodUObMHNSZ'}/>
      <Divider/>
      <VideoProvider
        videoData={
          {
            SD: 'https://academycdn.nobitex.ir/academy/api/file/download/' + 'OXQyGFBxbxodUObMHNSZ',
            HD: 'https://academycdn.nobitex.ir/academy/api/file/download/' + 'OXQyGFBxbxodUObMHNSZ',
            FHD: 'https://academycdn.nobitex.ir/academy/api/file/download/' + 'OXQyGFBxbxodUObMHNSZ',
          }
        }
      />
    </Container>
  );
}

export default Index;
