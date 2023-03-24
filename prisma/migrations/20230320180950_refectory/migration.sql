-- CreateTable
CREATE TABLE `alugueis` (
    `id` VARCHAR(191) NOT NULL,
    `funcionario_id` VARCHAR(191) NOT NULL,
    `cliente_id` VARCHAR(191) NOT NULL,
    `equipamento_id` VARCHAR(191) NOT NULL,
    `data_retirada` DATETIME(3) NULL,
    `data_devolucao` DATETIME(3) NULL,
    `valor` DOUBLE NOT NULL,
    `nota` VARCHAR(191) NOT NULL,
    `status` ENUM('RETIRADA', 'ENTREGUE', 'DEVOLVIDO') NOT NULL DEFAULT 'RETIRADA',
    `status_pagamento` ENUM('PENDENTE', 'PAGO', 'CANCELADO') NOT NULL DEFAULT 'PENDENTE',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ambientes` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `status` ENUM('ATIVO', 'OCUPADO', 'MANUTENCAO', 'DESATIVADO') NOT NULL DEFAULT 'ATIVO',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `artistas` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `data_nacimento` DATETIME(3) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NOT NULL,
    `whatsapp` BOOLEAN NOT NULL,
    `bio` VARCHAR(191) NOT NULL,
    `foto` VARCHAR(191) NOT NULL,
    `status` ENUM('ATIVO', 'FERIAS', 'PARADO') NOT NULL DEFAULT 'ATIVO',
    `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `banda_artistas` (
    `id` VARCHAR(191) NOT NULL,
    `banda_id` VARCHAR(191) NOT NULL,
    `artista_id` VARCHAR(191) NOT NULL,
    `instrumento_id` VARCHAR(191) NOT NULL,
    `data_saida` DATETIME(3) NOT NULL,
    `nota` VARCHAR(191) NOT NULL,
    `status` ENUM('ATIVO', 'FERIAS', 'SAIU') NOT NULL DEFAULT 'ATIVO',
    `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NOT NULL,
    `terminateAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bandas` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `bio` VARCHAR(191) NOT NULL,
    `logo` VARCHAR(191) NOT NULL,
    `foto` VARCHAR(191) NOT NULL,
    `contato_id` VARCHAR(191) NOT NULL,
    `status` ENUM('ATIVA', 'FERIAS', 'ACABOU') NOT NULL DEFAULT 'ATIVA',
    `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `emprestimos` (
    `id` VARCHAR(191) NOT NULL,
    `funcionario_id` VARCHAR(191) NOT NULL,
    `cliente_id` VARCHAR(191) NOT NULL,
    `data` DATETIME(3) NOT NULL,
    `data_devolucao` DATETIME(3) NOT NULL,
    `duracao` VARCHAR(191) NOT NULL,
    `valor` DOUBLE NOT NULL,
    `status` ENUM('RETIRADA', 'ENTRERGUE', 'DEVOLVIDO') NOT NULL DEFAULT 'RETIRADA',
    `nota` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ensaio` (
    `id` VARCHAR(191) NOT NULL,
    `agendamento_id` VARCHAR(191) NOT NULL,
    `date_start` DATETIME(3) NOT NULL,
    `date_end` DATETIME(3) NOT NULL,
    `pagamento_id` VARCHAR(191) NOT NULL,
    `nota` VARCHAR(191) NOT NULL,
    `status` ENUM('AGENDADO', 'ANDAMENTO', 'CANCELADO') NOT NULL DEFAULT 'AGENDADO',
    `status_pagamento` ENUM('PENDENTE', 'PAGO', 'CANCELADO') NOT NULL DEFAULT 'PENDENTE',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `equipamento_categorias` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `nota` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `equipamentos` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `data_compra` DATETIME(3) NULL,
    `marca` VARCHAR(191) NULL,
    `modelo` VARCHAR(191) NULL,
    `valor` DOUBLE NULL,
    `nota` VARCHAR(191) NULL,
    `equipamento_categorias_id` VARCHAR(191) NOT NULL,
    `status` ENUM('DISPONIVEL', 'DANIFICADO', 'MANUTENCAO', 'VENDIDO', 'EMPRESTIMO') NOT NULL DEFAULT 'DISPONIVEL',
    `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `deletedAt` DATETIME(3) NOT NULL,

    INDEX `equipamentos_equipamento_categorias_id_fkey`(`equipamento_categorias_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `eventos` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `funcionario_id` VARCHAR(191) NOT NULL,
    `cliente_id` VARCHAR(191) NOT NULL,
    `data` DATETIME(3) NOT NULL,
    `duracao` VARCHAR(191) NOT NULL,
    `valor` DOUBLE NOT NULL,
    `status` ENUM('PRODUCAO', 'DIVULGACAO', 'ANDAMENTO', 'ENCERRADO', 'CANCELADO') NOT NULL DEFAULT 'PRODUCAO',
    `status_pagamento` ENUM('PENDENTE', 'PAGO', 'CANCELADO') NOT NULL DEFAULT 'PENDENTE',
    `nota` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `funcionarios` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `apelido` VARCHAR(191) NOT NULL,
    `data_nacimento` DATETIME(3) NOT NULL,
    `funcoes_id` VARCHAR(191) NOT NULL,
    `status` ENUM('ATIVO', 'FOLGA', 'DESLIGADO') NOT NULL DEFAULT 'ATIVO',
    `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NOT NULL,

    INDEX `funcionarios_funcoes_id_fkey`(`funcoes_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `funcoes` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `nota` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `instrumento_categorias` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `nota` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `instrumentos` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `nota` VARCHAR(191) NOT NULL,
    `categoria_id` VARCHAR(191) NOT NULL,
    `status` ENUM('ATIVO', 'DANIFICADO', 'MANUTENCAO', 'VENDIDO', 'EMRPESTADO') NOT NULL DEFAULT 'ATIVO',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `messages` (
    `id` VARCHAR(191) NOT NULL,
    `text` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `user_id` VARCHAR(191) NOT NULL,

    INDEX `messages_user_id_fkey`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `musicas` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `autor` VARCHAR(191) NOT NULL,
    `nota` VARCHAR(191) NOT NULL,
    `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `avatar_url` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
