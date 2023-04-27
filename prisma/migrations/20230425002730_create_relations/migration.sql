/*
  Warnings:

  - You are about to drop the column `cliente_id` on the `alugueis` table. All the data in the column will be lost.
  - You are about to drop the column `cliente_id` on the `emprestimos` table. All the data in the column will be lost.
  - You are about to drop the column `cliente_id` on the `eventos` table. All the data in the column will be lost.
  - You are about to drop the column `funcoes_id` on the `funcionarios` table. All the data in the column will be lost.
  - You are about to drop the column `autor` on the `musicas` table. All the data in the column will be lost.
  - You are about to drop the `ensaio` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `funcoes` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `artista_id` to the `Alugueis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `artista_id` to the `Emprestimos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `artista_id` to the `Eventos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `papel_id` to the `Funcionarios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `autor_id` to the `Musicas` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `funcionarios_funcoes_id_fkey` ON `funcionarios`;

-- AlterTable
ALTER TABLE `alugueis` DROP COLUMN `cliente_id`,
    ADD COLUMN `artista_id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `emprestimos` DROP COLUMN `cliente_id`,
    ADD COLUMN `artista_id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `eventos` DROP COLUMN `cliente_id`,
    ADD COLUMN `artista_id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `funcionarios` DROP COLUMN `funcoes_id`,
    ADD COLUMN `papel_id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `musicas` DROP COLUMN `autor`,
    ADD COLUMN `autor_id` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `ensaio`;

-- DropTable
DROP TABLE `funcoes`;

-- CreateTable
CREATE TABLE `Agendamentos` (
    `id` VARCHAR(191) NOT NULL,
    `artista_id` VARCHAR(191) NOT NULL,
    `funcionario_id` VARCHAR(191) NOT NULL,
    `date_start` DATETIME(3) NOT NULL,
    `date_end` DATETIME(3) NOT NULL,
    `nota` VARCHAR(191) NOT NULL,
    `status` ENUM('AGENDADO', 'ANDAMENTO', 'CANCELADO') NOT NULL DEFAULT 'AGENDADO',

    INDEX `agendamentos_artista_id_fkey`(`artista_id`),
    INDEX `agendamentos_equipamentos_funcionario_id_fkey`(`funcionario_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pagamentos` (
    `id` VARCHAR(191) NOT NULL,
    `agendamento_id` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `nota` VARCHAR(191) NOT NULL,
    `status_pagamento` ENUM('CRIADO', 'PENDENTE', 'PAGO', 'CANCELADO') NOT NULL DEFAULT 'CRIADO',

    INDEX `agendamentos_agendamento_id_fkey`(`agendamento_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Papeis` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `nota` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `funcionarios_papel_id_fkey` ON `Funcionarios`(`papel_id`);

-- AddForeignKey
ALTER TABLE `Alugueis` ADD CONSTRAINT `Alugueis_funcionario_id_fkey` FOREIGN KEY (`funcionario_id`) REFERENCES `Funcionarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Alugueis` ADD CONSTRAINT `Alugueis_artista_id_fkey` FOREIGN KEY (`artista_id`) REFERENCES `Artistas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Alugueis` ADD CONSTRAINT `Alugueis_equipamento_id_fkey` FOREIGN KEY (`equipamento_id`) REFERENCES `Equipamentos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Banda_artistas` ADD CONSTRAINT `Banda_artistas_banda_id_fkey` FOREIGN KEY (`banda_id`) REFERENCES `Bandas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Banda_artistas` ADD CONSTRAINT `Banda_artistas_artista_id_fkey` FOREIGN KEY (`artista_id`) REFERENCES `Artistas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Banda_artistas` ADD CONSTRAINT `Banda_artistas_instrumento_id_fkey` FOREIGN KEY (`instrumento_id`) REFERENCES `Instrumentos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Bandas` ADD CONSTRAINT `Bandas_contato_id_fkey` FOREIGN KEY (`contato_id`) REFERENCES `Artistas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Emprestimos` ADD CONSTRAINT `Emprestimos_funcionario_id_fkey` FOREIGN KEY (`funcionario_id`) REFERENCES `Funcionarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Emprestimos` ADD CONSTRAINT `Emprestimos_artista_id_fkey` FOREIGN KEY (`artista_id`) REFERENCES `Artistas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Agendamentos` ADD CONSTRAINT `Agendamentos_artista_id_fkey` FOREIGN KEY (`artista_id`) REFERENCES `Artistas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Agendamentos` ADD CONSTRAINT `Agendamentos_funcionario_id_fkey` FOREIGN KEY (`funcionario_id`) REFERENCES `Funcionarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pagamentos` ADD CONSTRAINT `Pagamentos_agendamento_id_fkey` FOREIGN KEY (`agendamento_id`) REFERENCES `Agendamentos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Equipamentos` ADD CONSTRAINT `Equipamentos_equipamento_categorias_id_fkey` FOREIGN KEY (`equipamento_categorias_id`) REFERENCES `Equipamento_categorias`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Eventos` ADD CONSTRAINT `Eventos_funcionario_id_fkey` FOREIGN KEY (`funcionario_id`) REFERENCES `Funcionarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Eventos` ADD CONSTRAINT `Eventos_artista_id_fkey` FOREIGN KEY (`artista_id`) REFERENCES `Artistas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Funcionarios` ADD CONSTRAINT `Funcionarios_papel_id_fkey` FOREIGN KEY (`papel_id`) REFERENCES `Papeis`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Instrumentos` ADD CONSTRAINT `Instrumentos_categoria_id_fkey` FOREIGN KEY (`categoria_id`) REFERENCES `Instrumento_categorias`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Messages` ADD CONSTRAINT `Messages_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Musicas` ADD CONSTRAINT `Musicas_autor_id_fkey` FOREIGN KEY (`autor_id`) REFERENCES `Artistas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
