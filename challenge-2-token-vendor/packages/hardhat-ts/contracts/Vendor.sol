pragma solidity >=0.8.0 <0.9.0;
// SPDX-License-Identifier: MIT

import "@openzeppelin/contracts/access/Ownable.sol";
import './YourToken.sol';

contract Vendor is Ownable {
  
  YourToken public yourToken;

  uint256 public constant tokensPerEth = 100;

  event BuyTokens (
    address buyer, 
    uint256 amountOfEth, 
    uint256 amountOfTokens
  );

  event SellTokenEvent (
    address seller,
    uint256 amountSold
  );

  constructor(address tokenAddress) {
    yourToken = YourToken(tokenAddress);
  }

  // ToDo: create a payable buyTokens() function:
  function buyTokens() external payable {
    uint256 tokenValue = msg.value * tokensPerEth;
    uint256 vendorBalance = yourToken.balanceOf(address(this));

    require(tokenValue <= vendorBalance, "Vendor does not have enough tokens!!!");

    yourToken.transfer(msg.sender, tokenValue);
    
    emit BuyTokens(msg.sender, msg.value/1e18, tokenValue);
  }

  // ToDo: create a withdraw() function that lets the owner withdraw ETH
  function withdraw() external onlyOwner {
    uint256 ethBalance = address(this).balance;
    (bool sent,) = msg.sender.call{ value: ethBalance }("");
    require(sent, "Failed to send Ethers!!!");
  }

  // ToDo: create a sellTokens() function:
  function sellTokens(uint256 amount) external {
    yourToken.transferFrom(msg.sender, address(this), amount);

    uint256 tokenEthValue = amount / 100;
    (bool sent,) = msg.sender.call{ value: tokenEthValue }("");
    require(sent, "Failed to send Ethers!!!");

    emit SellTokenEvent(msg.sender, amount/1e18);
  }

}
