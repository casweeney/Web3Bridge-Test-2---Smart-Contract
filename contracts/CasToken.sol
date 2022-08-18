// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CasToken is ERC20 {
    uint public constant maxTotalSupply = 1000000000 * 10 ** 18;
    constructor() ERC20("Cas Token", "CAST") {}

    function mint(uint _amount) internal {
        _mint(msg.sender, _amount);
    }
}