require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area fringe speak guard render remain hole gloom dry fringe tumble'; 
let testAccounts = [
"0xf6f2be1faf551f73379291eed876a19fe63f41cf15e98eb7e0298b2ff847be08",
"0xfe8809e7d4017a0ce62c7fc72d11b09176d19a32efc4aab80271681ed2fe8084",
"0xd97b51540e232c98991e9b620781ad4ea9ad8dcd7c7f8bd79ee40d137c0dde89",
"0x72c66e2bfb2859c81cdab113a636fb687296b5cef9fc6bed6f524c524962df38",
"0x7fecc2237c422772ed77273df87dcf5af5bd8abd04c28a833e0f053132b10ea7",
"0x45e547228d9763a140879da0f2564d1fcae4cba032cdc74b948b5526719394a4",
"0xd6675b7be9ba09cb9754e7dcfe0a14c241ccd33eb28cc08fafbdf6df71e583dd",
"0x1584bbbb083279a9465b854d7ef419e2b6db5c9cde993221a5ab60e0310edff3",
"0x2d30f2f1b34e26b701b29c7b40aa3162f8be062b33a4440a17c06827886ee22e",
"0x9e61b57e2a405068d31b3152bba69ce8255d4c780c3bf173f345d3d59f3dca93"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

