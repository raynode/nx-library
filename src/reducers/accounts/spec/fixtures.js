
import faker from 'faker'

export default {
  Accounts1 : {
    name           : faker.finance.accountName(),
    initialBalance : faker.commerce.price(),
    updatedBalance : faker.commerce.price(),
  },
}
