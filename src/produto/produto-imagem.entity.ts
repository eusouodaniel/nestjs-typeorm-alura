import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('produto_imagens')
export class ProdutoImagem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'url', length: 100, nullable: false })
  url: string;

  @Column({ name: 'descricao', length: 100, nullable: false })
  descricao: string;
}
