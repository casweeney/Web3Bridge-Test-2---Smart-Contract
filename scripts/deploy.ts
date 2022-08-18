import { ethers } from "hardhat";

const main = async () => {
  const Staking = await ethers.getContractFactory("Staking");
  const staking = await Staking.deploy();

  await staking.deployed();

  console.log("Staking Contract deployed to:", staking.address);

  /// This is deployed on Goerli Testnet with the contract address below
  /// Contract Address:  0x7b95FD35d50C3023c569B4547E4cad87A98227D4

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});