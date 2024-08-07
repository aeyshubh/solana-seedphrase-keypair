import { Keypair } from "@solana/web3.js";
import * as bip39 from "bip39";
import bs58 from 'bs58';
const mnemonic =
  "beautiful secret phrase here";
const seed = bip39.mnemonicToSeedSync(mnemonic, ""); // (mnemonic, password)
const keypair = Keypair.fromSeed(seed.slice(0, 32));
console.log(`Pub Key is: ${keypair.publicKey.toString()}`);
console.log(`Secret Key is: ${keypair.secretKey}`);
