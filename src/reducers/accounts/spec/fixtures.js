
import faker from 'faker'

export default {
  Accounts1 : {
    name         : faker.finance.accountName(),
    initialValue : faker.commerce.price(),
    updatedValue : faker.commerce.price(),
  },
}
