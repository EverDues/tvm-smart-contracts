# EverDues TVM Smart Contract Sample for Subscription Infrastructure Implementation

![ EverDues](https://github.com/EverDues/tvm-smart-contracts/blob/master/logo.png)

EverDues TVM Smart Contracts sample is a repository that provides a collection of smart contracts for the VENOM blockchain. These contracts are developed using the Threaded Virtual Machine (TVM) and are designed to be deployed and executed on the VENOM network. 

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technical implementation](#technical-implementation)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The EverDues TVM Smart Contract Project is developed to cater to the needs of the web3 Subscription system, providing essential functionalities for managing subscriptions, payments, and associated operations. Leveraging the capabilities of the VENOM blockchain's TVM, this project offers a solid foundation for the subscription infrastructure of the web3 platform.

By utilizing the EverDues TVM Smart Contract Project, the web3 Subscription system can ensure secure, transparent, and reliable subscription management, enabling smooth user experiences and efficient subscription processes.

EverDues TVM Smart Contract Project works on top of a new implementation of the TIP3 standard proposed by our team.

[TIP3 implementation](https://github.com/EverDues/tip3/commits/master)

[VEP-33:Allowance Token Interface ](https://docs.venom.foundation/standards/VEP/vep-33/)


To get started with TVM Smart Contracts and deploy the sample, follow these steps:

1. Clone the repository:

   ```shell
   git clone https://github.com/EverDues/tvm-smart-contracts.git
   ```

2. Install the required dependencies:

   ```shell
   cd tvm-smart-contracts
   npm install
   ```

3. Build the smart contracts:

   ```shell
   npx locklift build  --config locklift.config.ts
   ```

4. Start exploring the smart contracts and examples provided in the repository.

## Usage

The EverDues TVM Smart Contract Project offers a range of functionalities and components tailored for the web3 Subscription infrastructure. Here are some key components and their usage:

- **Subscription Management Contracts**: These contracts provide essential functions for managing subscriptions, such as creating new subscriptions, modifying existing ones, canceling subscriptions, and handling subscription renewals.

- **Payment Handling Contracts**: The project includes contracts that facilitate secure and transparent payment transactions for subscription fees, ensuring reliable P2P payment processing between subscribers and service providers.

- **Customization and Configuration**: The smart contracts in this project offer configurable parameters that allow customization of subscription plans, pricing models, and other subscription-related settings. This flexibility enables the web3 Subscription system to adapt to various business requirements.

- **Integration with web3 Platform**: The EverDues TVM Smart Contract Project is designed to seamlessly integrate with the wider web3 platform. Other developers can build a comprehensive subscription infrastructure within the web3 ecosystem.

## Technical implementation

This is a comprehensive system of smart contracts developed for a Subscription platform. The system uses VENOM blockchain technology with Solidity as the primary programming language, featuring the unique characteristics of VENOM, such as TIP3 tokens and TvmCells. 

The overall system consists of multiple smart contracts, namely Root, Subscription, SubscriptionPlan, and two interfaces (ISubscription and ISubscriptionPlan). There are also additional libraries included that handle errors, gas calculations, message flags, and subscription statuses.

**Smart Contract Architecture:**

1. **Root Contract**: This is the main contract, which works as the entry point for the system. It manages the creation of SubscriptionPlan contracts.

2. **SubscriptionPlan Contract**: This contract manages a particular subscription plan. It also enables upgrading of the plan using code from the Root contract and can transfer ownership of the subscription plan.

3. **Subscription Contract**: This contract is for individual subscriptions under a specific plan. It keeps track of the payment details and enables actions like executing, stopping, resuming, and cancelling the subscription.

**Key Design Patterns:**

1. **Upgradeable Contracts**: This system utilizes the upgradeable contract design pattern, enabling the developer to update the contract's code after deployment. This pattern is crucial for bug fixes, improvements, and feature expansions.

2. **Access Control**: The system employs the role-based access control pattern through modifiers like `onlyOwner` and `onlyRoot` to restrict function access based on roles.

3. **Fail early and loudly**: The contracts use the 'require' statements to validate the conditions before executing functions. If conditions are not met, the contract reverts the transaction, saving unnecessary gas costs.

**Key Functions:**

1. `deploySubscriptionPlan`: In the Root contract, it deploys a new SubscriptionPlan contract.

2. `upgradeSubscriptionPlan`: In the Root contract, it allows upgrading a SubscriptionPlan contract to a new version.

3. `startSubscription`: In the SubscriptionPlan contract, it enables the user to start a new subscription.

4. `acceptSubscriptionUpgrade`: In the Subscription contract, it enables the acceptance of an upgrade for the subscription.

5. `executeSubscription`: In the Subscription contract, it allows the execution of the subscription, transferring tokens from the user's wallet to the recipient's wallet periodically.

6. `stopSubscription`, `resumeSubscription`: These methods in the Subscription contract allow the user to stop and resume the subscription.

7. `checkSubscriptionStatus`: This method in the Subscription contract allows checking the current status of the subscription.

In terms of gas management, the system ensures that it always reserves enough gas for contract deployment and execution, and takes care to transfer remaining gas appropriately. It also handles bounced transactions by using the `onBounce` method, particularly when a transfer from the allowance token wallet fails.

Overall, this system is a comprehensive solution for managing subscriptions using VENOM's blockchain technology, allowing the flexibility of plan upgrades, easy management of individual subscriptions, and efficient handling of tokens and gas.


## Contributing

Contributions to the EverDues TVM Smart Contracts repository are welcome! If you have any improvements, bug fixes, or new contracts to propose, please open an issue or submit a pull request. Make sure to follow the contribution guidelines outlined in the repository.
