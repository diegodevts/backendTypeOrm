import {MigrationInterface, QueryRunner,  Table} from "typeorm";


export class CreateAdresses1621457174859 implements MigrationInterface {
    
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')


        await queryRunner.createTable(new Table({
            name: 'adresses',
            columns: [
                {
                  name: 'id',
                  type: 'uuid',
                  isPrimary: true,
                  generationStrategy: 'uuid',
                  default: 'uuid_generate_v4()'  
                },
                {
                    name: 'endereco',
                    type: 'varchar',
                    
                },
                {
                    name: 'numero',
                    type: 'integer'
                },
                {
                    name: 'complemento',
                    type: 'varchar',
                    isNullable: true
                },
                {
                    name: 'cep',
                    type: 'bigint'
                },
                {
                    name: 'cidade',
                    type: 'varchar'
                },
                {
                    name: 'userId',
                    type: 'uuid'
                },
                {
                    name: 'estado',
                    type: 'varchar'
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
                  },
                  
                ],
                foreignKeys:[
                    {
                    columnNames: ['userId'],
                    name: 'FKrelation',
                    referencedTableName: 'users',
                    referencedColumnNames: ['id'],
                    onDelete: 'SET NULL',
                    onUpdate: 'SET NULL',

                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('adresses')
        await queryRunner.query('DROP EXTENSION "uuid-ossp')
        await queryRunner.dropForeignKey('adresses', 'userId')
    }

}