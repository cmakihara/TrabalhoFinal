export class Pedido {
  constructor(
    public id?: number,
    public qtd_produto?: number,
    public valor_total?: number,
    public contato?: string,
    public usuario?: string,
  ){ }

}
