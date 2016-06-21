var faker = require("faker");
var _ = require("lodash");
var uuid = require("node-uuid");

module.exports = function() {
  var accounts;
  return {
    accounts: _.times(100, function() {
      return {
        id: uuid.v4(),
        name: faker.company.companyName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        createdAt: faker.date.past()
      }
    })
  }
}
