// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CBDCToken is ERC20 {
    address public admin;

    constructor() ERC20("CBDC Token", "CBDC") {
        admin = msg.sender;
    }

    function mint(address to, uint256 amount) external {
        require(msg.sender == admin, "only admin can mint");
        _mint(to, amount);
    }
}

