var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('fac3b6da'),
  addressVersion: 0x1C,
  privKeyVersion: 0x9C,
  P2SHVersion: 5,
  hkeyPublicVersion: 0x0488c42e,
  hkeyPrivateVersion: 0x0488e1f4,
  genesisBlock: {
    hash: hex('9c6eb8a9fe28ca1312de2eaea5cd6440ba817da353dcb71441a1886dafc9464f'),
    merkle_root: hex('e623301387da4ba03a489e88193991a37aec5d30870f3c9150f165cade04d373'),
    height: 0,
    nonce: 16762,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1372838150,
    bits: 504365040,
  },
  dnsSeeds: [
    'seed.casinocoin.org',
    'seed1.casinocoin.org',
    'seed2.casinocoin.org',
    'seed3.casinocoin.org',
    'seed1.casinocoin.info',
    'seed2.casinocoin.info',
    'seed3.casinocoin.info',
    'seed4.casinocoin.info'
  ],
  defaultClientPort: 9432
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('0b110907'),
  addressVersion: 0x6f,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('43497FD7F826957108F4A30FD9CEC3AEBA79972084E90EAD01EA330900000000'),
    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
    height: 0,
    nonce: 414098458,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1296688602,
    bits: 486604799,
  },
  dnsSeeds: [
    'testnet-seed.bitcoin.petertodd.org',
    'testnet-seed.bluematt.me'
  ],
  defaultClientPort: 18333
};
