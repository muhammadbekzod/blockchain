const CaverExtKAS = require("caver-js-ext-kas")
require("dotenv").config();
const { ACCESS_ID, ACCESS_KEY, CHAIN_ID } = process.env;

const caver = new CaverExtKAS();
caver.kas.initKIP17API(CHAIN_ID, ACCESS_ID, ACCESS_KEY, 'https://kip17-api.klaytnapi.com')
// Create a KeyringContainer instance
const keyringContainer = new caver.keyringContainer()

// Create a keyring from private key
const keyring = keyringContainer.keyring.createFromPrivateKey('0x4b05eb4451ec696c310895c1bce8c0870a8c05b34e735de0457647784ea9f042')
const address = keyring._address;


async function deploy() {
    const ret = await caver.kas.kip17.deploy('TEST-NFT', 'TNFT', 't-nft');
    console.log(ret);
}



// (async () => {
//     await deploy();
// })()

module.exports = {
    transfer_nft: (contract_alias, from, to, tokenId) => {
        return new Promise(async (resolve, reject) => {
            const ret = await caver.kas.kip17.transfer(contract_alias, from, from, to, tokenId).catch(console.log);
            if (ret.status == "Submitted") {
                resolve(ret);
            } else {
                reject(ret);
            }
        })
    },
    getTokenList: (contract_alias) => {
        return new Promise(async (resolve, reject) => {
            const ret = await caver.kas.kip17.getTokenList(contract_alias).catch((err) => { reject(err) })
            if (ret) {
                resolve(ret);
            }
        })
    },
    getTokenListByAddress: (contract_alias, owner_address) => {
        return new Promise(async (resolve, reject) => {
            const ret = await caver.kas.kip17.getTokenListByOwner(contract_alias, owner_address).catch((err) => {
                reject(err);
            });
            if (ret) resolve(ret);
        })
    },
    getTokenListByParameter: (contract_alias, parameter) => {
        return new Promise(async (resolve, reject) => {
            const ret = await caver.kas.kip17.getTokenList(contract_alias, parameter)
            if (ret.status == "Submitted") {
                resolve(ret);
            } else {
                reject(ret);
            }
        })
    }
}