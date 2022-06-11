import axios from "axios";
import { reactive } from "vue";

export interface INewBlock {
  from: string;
  to: string;
  amount?: number;
  cardDebited?: number;
  accountNumberTo?: number;
}

export class newBlock {
  private newBlock: INewBlock | undefined = undefined;

  constructor() {}

  async createNewBlock(p_block: INewBlock) {
    const response = await axios.post("http://localhost:3000/newblock", {
      data: {
        p_block,
      },
    });
    console.log(response);
  }
}

const newBlockController = reactive(new newBlock());
export default newBlockController;
