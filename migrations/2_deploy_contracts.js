const DappToken = artifacts.require('DappToken')
const DaiToken = artifacts.require('DaiToken')
const TokenFarm = artifacts.require('TokenFarm')

module.exports = async function(deployer, network, accounts) {
  // Deploy Mock DAI Token
  await deployer.deploy(DaiToken)
  const daiToken = await DaiToken.deployed()

  // Deploy Dapp Token
  await deployer.deploy(DappToken)
  const dappToken = await DappToken.deployed()

  // Deploy TokenFarm
  await deployer.deploy(TokenFarm, dappToken.address, daiToken.address)
  const tokenFarm = await TokenFarm.deployed()

  // Transfer all tokens to TokenFarm (1 million)
  await dappToken.transfer(tokenFarm.address, '1000000000000000000000000')

  // Transfer 100 Mock DAI tokens to investor
  await daiToken.transfer(accounts[0], '50000000000000000000')
  await daiToken.transfer(accounts[1], '10000000000000000000')
  await daiToken.transfer(accounts[2], '20000000000000000000')
  await daiToken.transfer(accounts[3], '30000000000000000000')
  await daiToken.transfer(accounts[4], '40000000000000000000')
  await daiToken.transfer(accounts[5], '50000000000000000000')
  await daiToken.transfer(accounts[6], '60000000000000000000')
  await daiToken.transfer(accounts[7], '70000000000000000000')


}
