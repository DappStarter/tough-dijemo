require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner knife flush space stone cruise praise pumpkin hundred light army genre'; 
let testAccounts = [
"0xfa06dd9099a7e7d036c1aa8e5cfcbbc3bc95d0e91e0a0d3d3a6c8e2b58e8f47e",
"0x85bb012817f3144d0b2f82e7c2bd1b5246acb43a6cfa7ef5aa714c73ff2c181e",
"0x4f576a3893976573c11396fc2fdf5ad952115dff47ee2458a129389f0e173e5b",
"0x9fdb6bab3696beb54ff540010a9a16b17423ffb348344a3ef41c609cde9ca030",
"0x5f55ed25b6d95aa7fa1187e41c0afc5231a83c33d1d0f5442f1bf333b0a44e37",
"0x832ace0976e9c061d374f403a6850118b1718e4316ae9d12a39d4c91397e42a7",
"0xdf94d26c5c71fa2bc5f6fa02ca28875afe68f1ca0a4e0f8cdd6337d5de0538fc",
"0x7e16f904340db7b738da151a97b8a730805567786ef8039f530a198618aaa0d9",
"0xe68f460bf9385ddf8d49b42d86832dd2bbbc6bb3a22f8f4eb7d04515cf3e3ddf",
"0x83deb201f79f062fee8b2623fccd16835aa9c576b963fce0bd826ca4dac69919"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
