import { Address, toNano, WalletTypes } from "locklift";

async function main() {
  const signer = (await locklift.keystore.getSigner("0"))!;
  const { account } = await locklift.factory.accounts.addNewAccount({
    type: WalletTypes.WalletV3,
    value: toNano(100000),
    publicKey: signer.publicKey,
  });
  const { contract: root, tx } = await locklift.factory.deployContract({
    contract: "SubscriptionsRoot",
    publicKey: signer.publicKey,
    initParams: {
      platformCode_: (await locklift.factory.getContractArtifacts("Platform")).code,
      rootOwner_: account.address,
      deployer_: new Address("0:0000000000000000000000000000000000000000000000000000000000000000"),
      randomNonce_: Math.random() * 6400 | 0,
    },
    constructorParams: {
      remainingGasTo: account.address,
      subscriptionPlanCode: (await locklift.factory.getContractArtifacts("SubscriptionPlan")).code,
      subscriptionCode: (await locklift.factory.getContractArtifacts("Subscription")).code
    },
    value: locklift.utils.toNano(3),
  });

  console.log(`SubscriptionsRoot deployed at: ${root.address.toString()}`);
}

main()
  .then(() => process.exit(0))
  .catch(e => {
    console.log(e);
    process.exit(1);
  });
