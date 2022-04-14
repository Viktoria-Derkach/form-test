import { SelectEnum } from "../SelectPayment/SelectPayment.props";

export interface IReviewForm {
  name: string;
  EIN: string;
  notes: string;
  paymentMethod: SelectEnum;
}
