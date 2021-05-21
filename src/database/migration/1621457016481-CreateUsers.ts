import {MigrationInterface, QueryRunner,  Table} from "typeorm";

export class CreateUsers1621457016481 implements MigrationInterface {
    
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')


        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [
                {
                  name: 'id',
                  type: 'uuid',
                  isPrimary: true,
                  generationStrategy: 'uuid',
                  default: 'uuid_generate_v4()'  
                },
                {
                    name: 'nome',
                    type: 'varchar',
                    
                },
                {
                    name: 'telefone',
                    type: 'bigint'
                },
                {
                    name: 'email',
                    type: 'varchar',
                    isUnique: true
                },
                {
                    name: 'senha',
                    type: 'varchar'
                },
                {
                    name: 'idade',
                    type: 'integer'
                },
                {
                    name: 'peso',
                    type: 'integer'
                },
                {
                    name: 'etnia',
                    type: 'enum',
                    enum: ['branca', 'amarela', 'parda', 'preta', 'indigena'],
                    enumName: 'enumEtnia',
                    default: "'branca'"
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()',
                 },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()',
                },],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
        await queryRunner.query('DROP EXTENSION "uuid-ossp')
    }

}
