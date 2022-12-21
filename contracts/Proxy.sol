// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Proxy {
    // address of the target contract
    address public target;

    constructor(address _target) {
        // set the target contract's address
        target = _target;
    }

    function forward() public {
        // send the data as calldata to the target contract
        target.call(abi.encodeWithSignature("attempt()"));
    }
}
