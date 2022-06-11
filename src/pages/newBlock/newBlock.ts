import axios from "axios";
import router from "../../plugins/router/index";
import { reactive } from "vue";
import { Notify } from "quasar";

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
    if (response.status.toString().startsWith("2")) {
      Notify.create({
        type: "positive",
        message: "Creado correctamente",
      });
      router.push("/dashboard");
    }
  }
}

const newBlockController = reactive(new newBlock());
export default newBlockController;
