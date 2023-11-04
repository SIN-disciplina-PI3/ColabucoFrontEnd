import java.util.ArrayList;
import java.util.Random;

public class CarrinhoDeCompras {
    Random random = new Random();
    private String id;
    private double valor;
    private ArrayList<Produto> produtos;
    private String cpfCliente;
    private Pedido pedido;
    private Cliente cliente;

    //construtor
    public CarrinhoDeCompras(String cpfCliente) {
        this.id = Integer.toString(random.nextInt());
        this.valor = 0.0;
        this.produtos = new ArrayList<Produto>();

        this.cpfCliente = cpfCliente;
    }

    //getters
    public String getId() {
        return id;
    }
    public double getValor() {
        return valor;
    }
    public ArrayList<Produto> getProdutos() {
        return produtos;
    }
    public String getCpfCliente() {
        return cpfCliente;
    }

    //metódos
    public void adicionarProduto(Produto produto){
        this.produtos.add(produto);
        this.valor += produto.getPreco();
    }

    public void removerProduto(String idProduto){
        for (int i = 0; i < this.produtos.size(); i++){
            if (this.produtos.get(i).getId() == idProduto){
                this.produtos.remove(this.produtos.get(i));
                this.valor -= this.produtos.get(i).getPreco();
            }
        }
    }

    public void limpar(){
        this.produtos.clear();
        this.valor = 0.0;
    }

    public void fazerPedido(String endereco){
        pedido = new Pedido(this.id, this.cpfCliente, endereco, this.valor);
        this.cliente.registrarPedido(pedido);
    }
}
