-- AlterTable
ALTER TABLE `user` ADD COLUMN `status` ENUM('ATIVO', 'DESATIVADO', 'PENDENCIA') NOT NULL DEFAULT 'ATIVO';
