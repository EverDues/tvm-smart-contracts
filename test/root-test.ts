import { expect } from "chai";
import { Contract, Signer, WalletTypes, toNano, Address } from "locklift";
import { FactorySource } from "../build/factorySource";

let sample: Contract<FactorySource["SubscriptionsRoot"]>;
let signer: Signer;

describe("Test Subscriptions Root contract", async function () {
    before(async () => {
        signer = (await locklift.keystore.getSigner("0"))!;
    });
    describe("Contracts", async function () {
        it("Load contract factory", async function () {
            const sampleData = await locklift.factory.getContractArtifacts("SubscriptionsRoot");

            expect(sampleData.code).not.to.equal(undefined, "Code should be available");
            expect(sampleData.abi).not.to.equal(undefined, "ABI should be available");
            expect(sampleData.tvc).not.to.equal(undefined, "tvc should be available");
        });

        it("Deploy contract", async function () {
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
            expect(await locklift.provider.getBalance(root.address).then(balance => Number(balance))).to.be.above(0);
        });
    });
});
