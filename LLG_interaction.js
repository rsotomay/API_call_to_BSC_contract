const express = require("express");
const { ethers } = require("ethers");
const LLG_ABI = require("./abis/LLG.json");
require("dotenv").config();

const app = express();

//Ethereum provider with BSC endpoint
const provider = ethers.getDefaultProvider("https://bsc-dataseed.binance.org/");

const contractAddress = "0x4691f60c894d3f16047824004420542e4674e621";
// Loads smart contract
const contract = new ethers.Contract(contractAddress, LLG_ABI, provider);

//Calling the smart cuntract function owner
app.get("/callContract", async (req, res) => {
  try {
    const result = await contract.symbol();
    res.send(result);
    console.log(result);
  } catch (error) {
    res.status(500).send(error.toString());
  }
});
app.listen(3000, () => console.log("Server running on port 3000"));
