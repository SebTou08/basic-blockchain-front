import { INewBlock } from "src/pages/newBlock/newBlock";

export interface IBlock {
  _hash: string;
  _height: number;
  _body: INewBlock;
  _time: string;
  _previousBlockHash: string;
}

export interface IBlockchain {
  _chain: Array<IBlock>;
}
