export class Pedido {
  constructor(
    public id?: number,
    public qtd_produto?: string,
    public valor_total?: string,
    public contato_id_contato?: string,
    public usuario_id_usuario?: string,
  ){ }

}