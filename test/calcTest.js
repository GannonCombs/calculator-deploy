const calculator = artifacts.require("./calculator.sol");
const { assert } = require("node:console");
const utils = require("./helpers/utils");
const zombieNames = ["Zombie 1", "Zombie 2"];
contract("calculator", (accounts) => {
    let [alice, bob] = accounts;
    let a = 6;
    let b = 3;
    let contractInstance;
    beforeEach(async () => {
        contractInstance = await calculator.new();
    });
    it("should be able to add", async () => {
        const result = await contractInstance.add(a, b);
        assert.equal(result, (a+b));
    })
    it("should be able to subtract", async () => {
        const result = await contractInstance.subtract(a, b);
        assert.equal(result, (a-b));
    })
    it("should be able to multiply", async () => {
        const result = await contractInstance.multiply(a, b);
        assert.equal(result, (a*b));
    })
    it("should be able to divide", async () => {
        const result = await contractInstance.divide(a, b);
        //assert(b != 0);
        assert.equal(result, (a/b));
    })
    // it("should reject a divide by zero", async () => {
    //     const result = await contractInstance.divide(a, 0);
    //     //assert result has bad status
    // })
    it("should be able to modulo", async () => {
        const result = await contractInstance.modulo(a, b);
        assert.equal(result, (a%b));
    })
})
