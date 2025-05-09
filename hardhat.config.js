const fs = require('fs');

require('@nomiclabs/hardhat-waffle');

const privateKey = fs.readFileSync('.secret').toString().trim();

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: 'https://polygon-amoy-bor-rpc.publicnode.com',
      accounts: [privateKey],
    },
    // rinkeby: {
    // url: 'https://rinkeby.infura.io/v3/bed4fdcc76bb4978a9a3103ef0946f64',
    //   accounts: [privateKey],
    // https://rpc-mumbai.maticvigil.com
    // https://matic-mumbai.chainstacklabs.com
    // },
  },
  solidity: '0.8.4',
};
