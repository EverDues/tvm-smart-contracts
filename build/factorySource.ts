const platformAbi = {"ABIversion":2,"version":"2.2","header":["pubkey","time","expire"],"functions":[{"name":"constructor","inputs":[{"name":"code","type":"cell"},{"name":"contract_params","type":"cell"},{"name":"version","type":"uint32"},{"name":"send_gas_to","type":"address"}],"outputs":[]}],"data":[{"key":1,"name":"root","type":"address"},{"key":2,"name":"type_id","type":"uint8"},{"key":3,"name":"platform_params","type":"cell"}],"events":[],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"root","type":"address"},{"name":"type_id","type":"uint8"},{"name":"platform_params","type":"cell"}]} as const
const subscriptionAbi = {"ABIversion":2,"version":"2.2","header":["pubkey","time","expire"],"functions":[{"name":"constructor","inputs":[],"outputs":[]},{"name":"acceptSubscriptionUpgrade","inputs":[{"name":"code","type":"cell"},{"name":"version","type":"uint32"},{"name":"remainingGasTo","type":"address"},{"name":"upgrade_params","type":"cell"}],"outputs":[]},{"name":"cancel","inputs":[{"name":"send_gas_to","type":"address"}],"outputs":[]},{"name":"executeSubscription","inputs":[{"name":"remainingGasTo","type":"address"}],"outputs":[]},{"name":"stopSubscription","inputs":[{"name":"remainingGasTo","type":"address"}],"outputs":[]},{"name":"resumeSubscription","inputs":[{"name":"remainingGasTo","type":"address"}],"outputs":[]},{"name":"checkSubscriptionStatus","inputs":[],"outputs":[{"name":"value0","type":"uint8"}]},{"name":"onDeployWallet","inputs":[{"name":"subscription_wallet_","type":"address"}],"outputs":[]},{"name":"onWalletOf","inputs":[{"name":"wallet_address","type":"address"}],"outputs":[]},{"name":"onAcceptTokensAllowance","inputs":[{"name":"tokenRoot","type":"address"},{"name":"amount","type":"uint128"},{"name":"recoveryRate","type":"uint128"},{"name":"sender","type":"address"},{"name":"remainingGasTo","type":"address"},{"name":"value5","type":"cell"}],"outputs":[]},{"name":"requestSubscriptionCodeUpdate","inputs":[{"name":"remainingGasTo","type":"address"}],"outputs":[]},{"name":"onAcceptTokensTransfer","inputs":[{"name":"tokenRoot","type":"address"},{"name":"amount","type":"uint128"},{"name":"value2","type":"address"},{"name":"value3","type":"address"},{"name":"remainingGasTo","type":"address"},{"name":"value5","type":"cell"}],"outputs":[]},{"name":"subscription","inputs":[],"outputs":[{"components":[{"name":"tip3_root","type":"address"},{"name":"recipient","type":"address"},{"name":"period","type":"uint32"},{"name":"amount","type":"uint128"},{"name":"payment_timestamp","type":"uint32"},{"name":"execution_timestamp","type":"uint32"},{"name":"status","type":"uint8"},{"name":"payload","type":"cell"}],"name":"subscription","type":"tuple"}]}],"data":[],"events":[],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"components":[{"name":"tip3_root","type":"address"},{"name":"recipient","type":"address"},{"name":"period","type":"uint32"},{"name":"amount","type":"uint128"},{"name":"payment_timestamp","type":"uint32"},{"name":"execution_timestamp","type":"uint32"},{"name":"status","type":"uint8"},{"name":"payload","type":"cell"}],"name":"subscription","type":"tuple"},{"name":"nonce","type":"uint32"},{"name":"subscription_tip3_wallet","type":"address"},{"name":"_owner","type":"address"},{"name":"owner_tip3_wallet","type":"address"},{"name":"root","type":"address"},{"name":"platform_code","type":"cell"},{"name":"_platform_params","type":"cell"},{"name":"current_version","type":"uint32"},{"name":"type_id","type":"uint8"}]} as const
const subscriptionPlanAbi = {"ABIversion":2,"version":"2.2","header":["pubkey","time","expire"],"functions":[{"name":"constructor","inputs":[],"outputs":[]},{"name":"acceptSubscriptionPlanCodeUpgrade","inputs":[{"name":"code","type":"cell"},{"name":"version","type":"uint32"},{"name":"send_gas_to","type":"address"},{"name":"upgrade_params","type":"cell"}],"outputs":[]},{"name":"sendSurplusGas","inputs":[{"name":"to","type":"address"}],"outputs":[]},{"name":"deploySubscription","inputs":[{"name":"answerId","type":"uint32"},{"name":"payload","type":"cell"},{"name":"deploySubscriptionValue","type":"uint128"}],"outputs":[{"name":"subscription","type":"address"}]},{"name":"requestUpgradeSubscription","inputs":[{"name":"number","type":"uint32"},{"name":"currentVersion","type":"uint32"},{"name":"remainingGasTo","type":"address"}],"outputs":[]},{"name":"requestSubscriptionCodeUpdate","inputs":[{"name":"remainingGasTo","type":"address"}],"outputs":[]},{"name":"acceptSubscriptionCodeUpgrade","inputs":[{"name":"code","type":"cell"},{"name":"version","type":"uint32"},{"name":"remainingGasTo","type":"address"}],"outputs":[]},{"name":"requestSubscriptionPlanCodeUpdate","inputs":[{"name":"upgrade_data","type":"cell"},{"name":"remainingGasTo","type":"address"}],"outputs":[]},{"name":"getSubscriptions","inputs":[],"outputs":[{"name":"value0","type":"address[]"}]},{"name":"executeSubscriptions","inputs":[{"name":"executeSubscriptionValue","type":"uint128"}],"outputs":[]}],"data":[],"events":[],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"root","type":"address"},{"name":"platform_code","type":"cell"},{"name":"_platform_params","type":"cell"},{"name":"current_version","type":"uint32"},{"name":"type_id","type":"uint8"},{"name":"subscriptionCode","type":"cell"},{"name":"subscriptionVersion","type":"uint32"},{"name":"_owner","type":"address"},{"name":"_tip3_root","type":"address"},{"name":"_period","type":"uint32"},{"name":"_amount","type":"uint128"},{"name":"subscriberNumber","type":"uint32"}]} as const
const subscriptionsRootAbi = {"ABIversion":2,"version":"2.2","header":["pubkey","time","expire"],"functions":[{"name":"constructor","inputs":[],"outputs":[]},{"name":"transferOwnership","inputs":[{"name":"newOwner","type":"address"},{"name":"remainingGasTo","type":"address"}],"outputs":[]},{"name":"acceptOwnership","inputs":[{"name":"remainingGasTo","type":"address"}],"outputs":[]},{"name":"subscriptionVersion","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"value0","type":"uint32"}]},{"name":"platformCode","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"value0","type":"cell"}]},{"name":"subscriptionCode","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"value0","type":"cell"}]},{"name":"subscriptionPlanCode","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"value0","type":"cell"}]},{"name":"setSubscriptionCode","inputs":[{"name":"code","type":"cell"}],"outputs":[]},{"name":"setSubscriptionPlanCode","inputs":[{"name":"code","type":"cell"}],"outputs":[]},{"name":"rootOwner","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"value0","type":"address"}]},{"name":"subscriptionPlanVersion","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"value0","type":"uint32"}]},{"name":"requestUpgradeSubscriptionCode","inputs":[{"name":"currentVersion","type":"uint32"},{"name":"owner","type":"address"},{"name":"tip3_root","type":"address"},{"name":"amount","type":"uint128"},{"name":"period","type":"uint32"},{"name":"remainingGasTo","type":"address"}],"outputs":[]},{"name":"requestUpgradeSubscriptionPlan","inputs":[{"name":"currentVersion","type":"uint32"},{"name":"owner","type":"address"},{"name":"tip3_root","type":"address"},{"name":"amount","type":"uint128"},{"name":"period","type":"uint32"},{"name":"remainingGasTo","type":"address"},{"name":"upgrade_params","type":"cell"}],"outputs":[]},{"name":"subscriptionPlanOf","inputs":[{"name":"answerId","type":"uint32"},{"name":"owner","type":"address"},{"name":"amount","type":"uint128"},{"name":"period","type":"uint32"},{"name":"tip3_root","type":"address"}],"outputs":[{"name":"value0","type":"address"}]},{"name":"deploySubscriptionPlan","inputs":[{"name":"answerId","type":"uint32"},{"name":"amount","type":"uint128"},{"name":"period","type":"uint32"},{"name":"tip3_root","type":"address"},{"name":"deploySubscriptionPlanValue","type":"uint128"}],"outputs":[{"name":"subscriptionPlan","type":"address"}]},{"name":"sendSurplusGas","inputs":[{"name":"to","type":"address"}],"outputs":[]}],"data":[{"key":1,"name":"platformCode_","type":"cell"},{"key":2,"name":"rootOwner_","type":"address"}],"events":[],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"platformCode_","type":"cell"},{"name":"rootOwner_","type":"address"},{"name":"newOwner_","type":"address"},{"name":"subscriptionCode_","type":"cell"},{"name":"subscriptionPlanCode_","type":"cell"},{"name":"subscriptionVersion_","type":"uint32"},{"name":"subscriptionPlanVersion_","type":"uint32"}]} as const

export const factorySource = {
    Platform: platformAbi,
    Subscription: subscriptionAbi,
    SubscriptionPlan: subscriptionPlanAbi,
    SubscriptionsRoot: subscriptionsRootAbi
} as const

export type FactorySource = typeof factorySource
export type PlatformAbi = typeof platformAbi
export type SubscriptionAbi = typeof subscriptionAbi
export type SubscriptionPlanAbi = typeof subscriptionPlanAbi
export type SubscriptionsRootAbi = typeof subscriptionsRootAbi