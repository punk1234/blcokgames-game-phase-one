pragma solidity >=0.8.0 <0.9.0;
//SPDX-License-Identifier: MIT

import 'hardhat/console.sol';
import './ExampleExternalContract.sol';

contract Staker {
  ExampleExternalContract public exampleExternalContract;

  bool openForWithdraw = false;

  uint256 public constant threshold = 1 ether;
  uint256 public deadline = block.timestamp + 72 hours;

  mapping ( address => uint256 ) public balances;

  event StakedEther (
    address staker,
    uint256 amount
  );

  event StakeWithdrawal (
    address staker,
    uint256 amount
  );

  modifier notCompleted(ExampleExternalContract _exampleExternalContract) {
    require(!_exampleExternalContract.completed(), "Staking process should not be completed");
    _;
  }

  constructor(address exampleExternalContractAddress) public {
    exampleExternalContract = ExampleExternalContract(exampleExternalContractAddress);
  }

  // Collect funds in a payable `stake()` function and track individual `balances` with a mapping:
  //  ( make sure to add a `Stake(address,uint256)` event and emit it for the frontend <List/> display )
  function stake() payable public {
    balances[msg.sender] += msg.value;
    emit StakedEther(msg.sender, msg.value);
  }

  // After some `deadline` allow anyone to call an `execute()` function
  //  It should either call `exampleExternalContract.complete{value: address(this).balance}()` to send all the value
  function execute() public notCompleted(exampleExternalContract) {
    if(address(this).balance >= threshold) {
      exampleExternalContract.complete{value: address(this).balance}();
    } else {
      openForWithdraw = true; 
    }
  }

  // if the `threshold` was not met, allow everyone to call a `withdraw()` function
  function withdraw() public notCompleted(exampleExternalContract) {
    require(openForWithdraw, "Staked amount cannot be withdrawn");
    require(balances[msg.sender] > 0, "No stake for user!!!");

    address payable receiver = payable(msg.sender);
    uint256 balance = balances[msg.sender];

    balances[msg.sender] = 0;
    receiver.transfer(balance);

    emit StakeWithdrawal(msg.sender, balance);
  }

  // Add a `timeLeft()` view function that returns the time left before the deadline for the frontend
  function timeLeft() public view returns(uint256)  {
    uint256 currentTimestamp = block.timestamp;

    if(currentTimestamp > deadline) { return 0; }
    return (deadline - currentTimestamp);
  }

  // Add the `receive()` special function that receives eth and calls stake()
  receive() external payable {
    stake();
  }

}
