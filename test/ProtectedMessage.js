const { expect } = require("chai");
const { ethers } = require("hardhat");
require("dotenv").config();
describe("ProtectedMessage", function () {
  let ProtectedMessage, contract, owner, other;

  beforeEach(async function () {
    [owner, other] = await ethers.getSigners();

    ProtectedMessage = await ethers.getContractFactory("ProtectedMessage");
    contract = await ProtectedMessage.deploy(
      "Hello Hardhat!",
      process.env.SECRET
    );
    await contract.waitForDeployment();
  });

  it("Should set the owner correctly", async function () {
    expect(await contract.owner()).to.equal(owner.address);
  });

  it("Should return the initial message", async function () {
    expect(await contract.readMessage()).to.equal("Hello Hardhat!");
  });

  it("Owner can update message with correct password", async function () {
    const tx = await contract.updateMessage("New Message", process.env.SECRET);
    await tx.wait();
    expect(await contract.readMessage()).to.equal("New Message");
  });

  it("Should revert if wrong password is given", async function () {
    await expect(
      contract.updateMessage("Fail Update", "wrongpass")
    ).to.be.revertedWith("wrong password");
  });

  it("Should revert if non-owner tries to update", async function () {
    await expect(
      contract.connect(other).updateMessage("Hack Attempt", process.env.SECRET)
    ).to.be.revertedWith("not owner");
  });

  it("Should emit MessageUpdated event on update", async function () {
    await expect(contract.updateMessage("Updated!", process.env.SECRET))
      .to.emit(contract, "MessageUpdated")
      .withArgs("Hello Hardhat!", "Updated!");
  });
});
