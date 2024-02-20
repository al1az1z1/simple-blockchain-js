


const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(index, timestamp, data, previousHash='') {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = '';
    }

    calculateHash() {
        return SHA256(this.index + + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
     }
}

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock() {
        return new Block(0, "01/-1/2023" , "Gensis Block" , "0");
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock){
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }
}

let transferedCoid = new Blockchain();
transferedCoid.addBlock(new Block(1, "10/25/2023", {amount: 4}));
transferedCoid.addBlock(new Block(2, "12/12/2024", {amount: 8}));
transferedCoid.addBlock(new Block(3, "12/19/2024", {amount: 10}));

console.log(JSON.stringify(transferedCoid, null, 4));



 