const os = require("os");
//user info
const user = os.userInfo();
console.log(user);
//methods return the system uptime a seconds
console.log(`The system Uptime is ${os.uptime()} seconds`);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMe: os.totalmem(),
  freeMe: os.freemem(),
};
console.log(currentOs);
