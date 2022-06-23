import axios from "axios";
import { IBlockchain } from "../dashboard/models/Block";

export class DashboardController {
  private blockchain: IBlockchain | undefined = undefined;

  /**
   * Getter $blockchain
   * @return {IBlockchain }
   */
  public get $blockchain(): IBlockchain {
    return this.blockchain!;
  }

  /**
   * Setter $blockchain
   * @param {IBlockchain } value
   */
  public set $blockchain(value: IBlockchain) {
    this.blockchain = value;
  }

  constructor() {}

  async loadInfo() {
    this.blockchain = (
      await axios.get("http://localhost:3000/blockchain")
    ).data;

    console.log("%c⧭", "color: #e50000", this.blockchain);
  }
}

const dashboardController = new DashboardController();
export default dashboardController;
