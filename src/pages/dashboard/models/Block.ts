import { INewBlock } from "src/pages/newBlock/newBlock";

export interface IBlock {
  _hash: string;
  _height: number;
  _body: ITransaction;
  _time: string;
  _previousBlockHash: string;
}

export interface IBlockchain {
  _chain: Array<IBlock>;
}

interface IData {
  data: IPBlock;
}

interface IPBlock {
  p_block: ITransaction;
}

export interface ITransaction {
  from: string;
  to: string;
  amount: string;
  cardDebited: string;
  accountNumberTo: string;
}
