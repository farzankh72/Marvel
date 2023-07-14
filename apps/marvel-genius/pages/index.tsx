import {Nbxplayer} from "@marvel/nbxplayer";
import axios from "axios";
import {useEffect, useState} from "react";

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
    <span>
      <Nbxplayer data={'https://academycdn.nobitex.ir/academy/api/file/download/' + data}/>
    </span>
  );
}

export default Index;
