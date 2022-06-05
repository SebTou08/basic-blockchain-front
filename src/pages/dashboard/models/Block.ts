export  interface IBlock {
  _hash : string;
  _height: number;
  _body: any;
  _time: string;
  _previousBlockHash : string;
}

export interface IBlockchain{
  _chain: Array<IBlock>
}