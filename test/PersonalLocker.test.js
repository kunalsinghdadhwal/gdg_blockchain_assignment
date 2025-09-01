const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("PersonalLocker", function () {
  let PersonalLocker;
  let personalLocker;
  let owner;
  let addr1;
  let addr2;
  let initialMessage;
  let secretPassword;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();
    PersonalLocker = await ethers.getContractFactory("PersonalLocker");
    initialMessage = "Utsav Gautam";
    secretPassword = "GDG2024SecretPassword";
    personalLocker = await PersonalLocker.deploy(initialMessage, secretPassword);
  });

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      expect(await personalLocker.owner()).to.equal(owner.address);
    });

    it("Should set the initial message", async function () {
      expect(await personalLocker.getMessage()).to.equal(initialMessage);
    });

    it("Should set the password", async function () {
      expect(await personalLocker.getPassword()).to.equal(secretPassword);
    });

    it("Should set block_contr to deployment block number", async function () {
      const blockNumber = await ethers.provider.getBlockNumber();
      expect(await personalLocker.block_contr()).to.equal(blockNumber);
    });
  });

  describe("Access Control", function () {
    it("Should allow owner to get password", async function () {
      expect(await personalLocker.getPassword()).to.equal(secretPassword);
    });

    it("Should not allow non-owner to get password", async function () {
      await expect(
        personalLocker.connect(addr1).getPassword()
      ).to.be.revertedWith("Only owner can call this function");
    });

    it("Should not allow non-owner to update message", async function () {
      await expect(
        personalLocker.connect(addr1).updateMessage("New Message", secretPassword)
      ).to.be.revertedWith("Only owner can call this function");
    });
  });

  describe("Message Update", function () {
    it("Should update message with correct password", async function () {
      const newMessage = "Assignment Completed";
      await personalLocker.updateMessage(newMessage, secretPassword);
      expect(await personalLocker.getMessage()).to.equal(newMessage);
    });

    it("Should not update message with incorrect password", async function () {
      const newMessage = "Assignment Completed";
      await expect(
        personalLocker.updateMessage(newMessage, "WrongPassword")
      ).to.be.revertedWith("Incorrect password");
    });

    it("Should emit MessageUpdated event", async function () {
      const newMessage = "Assignment Completed";
      await expect(personalLocker.updateMessage(newMessage, secretPassword))
        .to.emit(personalLocker, "MessageUpdated")
        .withArgs(initialMessage, newMessage);
    });
  });

  describe("Public Functions", function () {
    it("Should allow anyone to read message", async function () {
      expect(await personalLocker.connect(addr1).getMessage()).to.equal(initialMessage);
    });

    it("Should allow anyone to read owner", async function () {
      expect(await personalLocker.connect(addr1).owner()).to.equal(owner.address);
    });

    it("Should allow anyone to read block_contr", async function () {
      const blockNumber = await ethers.provider.getBlockNumber();
      expect(await personalLocker.connect(addr1).block_contr()).to.equal(blockNumber);
    });
  });
});
