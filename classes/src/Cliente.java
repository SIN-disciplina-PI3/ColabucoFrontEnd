import java.util.ArrayList;

public class Cliente {
    protected String cpf, nome, email, telefone, endereco, senha;
    protected CarrinhoDeCompras carrinho;
    protected ArrayList<Cartao> cartoes;
    protected ArrayLis<Pedido> pedidos;

    //construtor
    public Cliente(String nome, String email, String cpf, String telefone, String senha, String endereco) {
        this.cpf = cpf;
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.endereco = endereco;
        this.senha = senha; //precisa?

        this.carrinho = new CarrinhoDeCompras(this.cpf);
        this.cartoes = new ArrayList<Cartao>();
    }

    //getters
    public String getCpf() {
        return cpf;
    }
    public String getNome() {
        return nome;
    }
    public String getEmail() {
        return email;
    }
    public String getTelefone() {
        return telefone;
    }
    public String getEndereco() {
        return endereco;
    }
    public String getSenha() {
        return senha;
    }
    public CarrinhoDeCompras getCarrinho() {
        return carrinho;
    }
    public ArrayList<Cartao> getCartoes() {
        return cartoes;
    }
    public ArrayList<Produto> getPedidos(){
        return pedidos;
    }

    //setters
    public void setCpf(String cpf) {
        this.cpf = cpf;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }
    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }
    public void setSenha(String senha) {
        this.senha = senha;
    }

    //métodos
    protected void adicionarAoCarrinho(Produto produto){
        this.carrinho.adicionarProduto(produto);
    }
    protected void removerDoCarrinho(String idProduto){
        this.carrinho.removerProduto(idProduto);
    }
    protected void limparCarrinho(){
        this.carrinho.limpar();
    }

    protected void adicionarCartao(String apelido, String numCartao, String validade, String nomeTitular, String instituicaoCartao, String bandeira, int cvv){
        Cartao cartao = new Cartao(apelido, numCartao, validade, nomeTitular, instituicaoCartao, bandeira, cvv);
        this.cartoes.add(cartao);
    }
    protected void removerCartao(String numCartao){
        for (int i = 0; i < this.cartoes.size(); i++){
            if (this.cartoes.get(i).getNumCartao() == numCartao){
                this.cartoes.remove(this.cartoes.get(i));
            }
        }
    }

    protected void finalizarCompra(){
        this.carrinho.fazerPedido(endereco);
    }

    public void registrarPedido(Pedido pedido){
        this.pedidos.add(pedido);
    }
}
