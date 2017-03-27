
import faker from 'faker'
import uuid from '..'

export default {
  Transactions1 : {
    name              : faker.finance.accountName(),
    initialAmount     : faker.commerce.price(),
    updatedAmount     : faker.commerce.price(),
    initialDesc       : faker.lorem.text(),
    updatedDesc       : faker.lorem.text(),
    initialCategories : [uuid()],
    updatedCategories : [uuid(), uuid(), uuid()],
  },
}
