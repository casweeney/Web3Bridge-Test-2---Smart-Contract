import { ethers } from "hardhat";

const main = async () => {

    const staking = await ethers.getContractAt("IStaking", "0x7b95FD35d50C3023c569B4547E4cad87A98227D4");

    // FUNCTION TO STAKE IN ETHER
    // const stakeTxn = await staking.stake(1, { value: ethers.utils.parseEther("0.5")});
    // const stakeResponse = await stakeTxn.wait();
    // console.log("Stake: ", stakeResponse);
    /**
     *The above interaction returned the transaction hash below: 
     * 0xf235f932d048df2c957a6a62d8bc0767c1c8e41c3d03729514a9d200d0f4216b
     **/


    /// FUNCTION TO CHECK CONTRACT BALANCE
    // const getContractBalance = await staking.checkContractBalance();
    // console.log("Stake: ", Number(getContractBalance._hex));


    /// FUNCTION TO WITHDRAW STAKED AMOUNT IF TIME ELAPSES
    const stakeWithdrawal = await staking.withdraw();
    const stakeWithdrawalResponse = await stakeWithdrawal.wait();
    console.log("Stake: ", stakeWithdrawalResponse);

    /**
     * The withdraw function reverted because the withdraw time was set to one day and withdrawal can't pass
     * Withdrawal function - but throw an error because withdrawal time is not reached
     * **/
  

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});