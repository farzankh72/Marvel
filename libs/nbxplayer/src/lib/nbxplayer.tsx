export interface NbxplayerProps {
  data: string
}

export function Nbxplayer(props: NbxplayerProps) {

  return (
    <div>
      <video controls src={props.data} width={500}
             height={500}/>
    </div>
  );
}

export default Nbxplayer;
