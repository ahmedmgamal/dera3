const DEX = artifacts.require('DEX')
const ERC20Basic = artifacts.require('ERC20Basic')


module.exports = async function(deployer, network, accounts) {
  // Deploy Mock DEX Token
  await deployer.deploy(DEX)
  const dex = await DEX.deployed()


  await deployer.deploy(ERC20Basic)
  const erc20Basic = await ERC20Basic.deployed()




  

}
