pragma solidity ^0.4.17;

import 'zeppelin-solidity/contracts/token/ERC20/StandardToken.sol';

contract Cheques is StandardToken {
  string public name = "Cheque";
  string public symbol = "CQE";
  uint8 public decimals = 13;
  uint public INITIAL_SUPPLY = 1000000000;

  function Cheques () public {
    totalSupply_ = INITIAL_SUPPLY;
    balances[msg.sender] = INITIAL_SUPPLY;
  }
}
