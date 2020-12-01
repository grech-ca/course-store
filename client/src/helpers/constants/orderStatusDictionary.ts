import { EnumOrderStatus } from 'graphql/generated';

export const orderStatusDictionary: Record<EnumOrderStatus, string> = {
  [EnumOrderStatus.Pending]: 'В ожидании',
  [EnumOrderStatus.InProcess]: 'В процессе',
  [EnumOrderStatus.Finished]: 'Закрыт',
  [EnumOrderStatus.Cancelled]: 'Отменен',
};
