export class Pedido {
  constructor(
    public id?: number,
    public qtd_produto?: number,
    public valor_total?: number,
    public contato_id_contato?: number,
    public usuario_id_usuario?: number,
  ){ }

}
