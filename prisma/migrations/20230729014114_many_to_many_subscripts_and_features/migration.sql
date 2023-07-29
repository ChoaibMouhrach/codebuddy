/*
  Warnings:

  - You are about to drop the column `subscriptionFeatureId` on the `subscriptions` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `subscriptions` DROP FOREIGN KEY `subscriptions_subscriptionFeatureId_fkey`;

-- AlterTable
ALTER TABLE `subscriptions` DROP COLUMN `subscriptionFeatureId`;

-- CreateTable
CREATE TABLE `_SubscriptionToSubscriptionFeature` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_SubscriptionToSubscriptionFeature_AB_unique`(`A`, `B`),
    INDEX `_SubscriptionToSubscriptionFeature_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_SubscriptionToSubscriptionFeature` ADD CONSTRAINT `_SubscriptionToSubscriptionFeature_A_fkey` FOREIGN KEY (`A`) REFERENCES `subscriptions`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_SubscriptionToSubscriptionFeature` ADD CONSTRAINT `_SubscriptionToSubscriptionFeature_B_fkey` FOREIGN KEY (`B`) REFERENCES `subscription_features`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
