const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("CraftlinkERC20",  function () {

  it("Initial owner balance should be 1mln", async function() {
    const [owner] = await ethers.getSigners();
    const sut = await craftlinkERC20();

    expect(await sut.balanceOf(owner.address)).to.equal(1000*1000);
  });

});

async function craftlinkERC20() {
  const CraftlinkERC20 = await ethers.getContractFactory("CraftlinkERC20");
  const craftlinkERC20 = await CraftlinkERC20.deploy("Craftlink", "CLK");
  return craftlinkERC20;
}
