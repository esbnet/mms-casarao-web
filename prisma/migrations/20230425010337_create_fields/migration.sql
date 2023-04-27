/*
  Warnings:

  - Made the column `updateAt` on table `artistas` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `updateAt` to the `Messages` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Alugueis_artista_id_fkey` ON `alugueis`;

-- DropIndex
DROP INDEX `Alugueis_equipamento_id_fkey` ON `alugueis`;

-- DropIndex
DROP INDEX `Alugueis_funcionario_id_fkey` ON `alugueis`;

-- DropIndex
DROP INDEX `Banda_artistas_artista_id_fkey` ON `banda_artistas`;

-- DropIndex
DROP INDEX `Banda_artistas_banda_id_fkey` ON `banda_artistas`;

-- DropIndex
DROP INDEX `Banda_artistas_instrumento_id_fkey` ON `banda_artistas`;

-- DropIndex
DROP INDEX `Bandas_contato_id_fkey` ON `bandas`;

-- DropIndex
DROP INDEX `Emprestimos_artista_id_fkey` ON `emprestimos`;

-- DropIndex
DROP INDEX `Emprestimos_funcionario_id_fkey` ON `emprestimos`;

-- DropIndex
DROP INDEX `Eventos_artista_id_fkey` ON `eventos`;

-- DropIndex
DROP INDEX `Eventos_funcionario_id_fkey` ON `eventos`;

-- DropIndex
DROP INDEX `Instrumentos_categoria_id_fkey` ON `instrumentos`;

-- DropIndex
DROP INDEX `Musicas_autor_id_fkey` ON `musicas`;

-- AlterTable
ALTER TABLE `artistas` MODIFY `updateAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `banda_artistas` MODIFY `terminateAt` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `bandas` MODIFY `deletedAt` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `emprestimos` MODIFY `data` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `data_devolucao` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `equipamentos` ALTER COLUMN `updateAt` DROP DEFAULT,
    MODIFY `deletedAt` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `funcionarios` MODIFY `deletedAt` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `messages` ADD COLUMN `updateAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `deletedAt` DATETIME(3) NULL;

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
