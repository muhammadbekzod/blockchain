const express = require("express");
const cookieParser = require("cookie-parser");
const UserController = require("./controller/User");
const Web3 = require("web3");
const { getTokenListByAddress, transfer_nft, getTokenList } = require("./klaytn");
const web3 = new Web3();
const app = express();

const welcome = `Welcome to the NFT Platform, We need to sign this message for on-click login. Don't worry this operation, it can't do any illegal things.\nnonce:`

app.use(cookieParser());
app.use(express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }))

app.use("*", (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Credentials", true);
    next();
})

// 用户信息签名注册
app.get("/login", (req, res) => {
    let { publicAddress } = req.query;
    // check parameter
    if (publicAddress != "" && publicAddress) {
        // store public address and nonce to database
        UserController.query(publicAddress, (err, data) => {
            if (err) res.status(500).send({ status: 500, message: err })
            else {
                if (data[0].length > 0) {
                    let nonce = data[0][0].nonce;
                    res.status(200).send({
                        status: 200,
                        message: {
                            nonce: welcome + nonce,
                            publicAddress
                        }
                    });
                } else {
                    // generate nonce
                    const nonce = Math.random() * 1000000 * 10 ** 18;
                    UserController.insert(publicAddress, welcome + nonce, (err, data) => {
                        if (err) res.status(500).send({ status: 500, message: err })
                        else res.status(200).send({
                            status: 200,
                            message: {
                                nonce: welcome + nonce,
                                publicAddress
                            }
                        });
                    })
                }
            }
        })
    } else {
        res.status(500).send({ status: 500, message: "param error" })
    }
})

app.post("/logout", (req, res) => {
    let { publicAddress } = req.body;
    if (publicAddress) {
        res.cookie('_user', {
            address: publicAddress,
            isAuthentication: false
        }, { httpOnly: false, expires: new Date(new Date().getTime() - (1000 * 60 * 60 * 24)) });

        res.status(200).send({
            status: 200, message: "logout"
        });
    } else {
        res.status(500).send({ status: 500, message: "Not register" })
    }
})

app.post("/authentication", (req, res) => {
    let { publicAddress, signature, nonce } = req.body;
    // resolve the public address by web3.js
    let address = web3.eth.accounts.recover(web3.utils.sha3(nonce), signature);
    // compare address with public address
    if (address.toLocaleLowerCase() == publicAddress.toLocaleLowerCase()) {
        // set cookie
        res.cookie('_user', {
            address: publicAddress,
            isAuthentication: true
        }, { httpOnly: false, expires: new Date(new Date().getTime() + (1000 * 60 * 60 * 24)) });

        // generate new nonce again
        const nonce = Math.random() * 1000000 * 10 ** 18;
        // update database
        UserController.update(publicAddress, nonce, (err, data) => {
            if (err) res.status(500).send(err);
            else res.status(200).send({
                status: 200, message: {
                    address: publicAddress,
                    isAuthentication: true
                }
            });
        })
    } else {
        res.status(500).send({ status: 500, message: "Not register" })
    }
})

app.get("/listByAddress", async (req, res) => {
    let { contract_alias, address } = req.query;
    let ret = await getTokenListByAddress(contract_alias, address).catch((err) => {
        console.log(err);
        res.status(500).send(err);
    });
    console.log(ret);
    if (ret) {
        res.status(200).send({
            status: 200,
            message: ret
        })
    }

})

app.get("/allNFTs", async (req, res) => {
    let { contract_alias } = req.query;
    let ret = await getTokenList(contract_alias).catch((err) => {
        res.status(500).send(err);
    })
    if (ret) {
        res.status(200).send({
            status: 200,
            message: ret
        })
    }
})

app.get("/buyNow", async (req, res) => {
    let { contract_alias, from, to, tokenId } = req.query;
    let ret = await transfer_nft(contract_alias, from, to, tokenId).catch((err) => {
        res.status(500).send(err);
    })
    if (ret) {
        res.status(200).send({
            status: 200,
            message: ret
        })
    }

})


const port = process.argv[2];
app.listen(port, () => {
    console.info(`listening at ${port}`);
})