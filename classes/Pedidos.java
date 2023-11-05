public class Pedidos {
    private int idPedido;
    private String cpfCliente;
    private String cnpjArtista;
    private int idCarrinho;
    private String opcoesEntrega;
    private double valor;
    private ArrayList<Pedidos> pedidos;

    public ArrayList<Pedidos> listarPedidos(){
        pedidos;
    }
    public int getIdPedido() {
        return idPedido;
    }

    public void setIdPedido(int idPedido) {
        this.idPedido = idPedido;
    }

    public String getCpfCliente() {
        return cpfCliente;
    }

    public void setCpfCliente(String cpfCliente) {
        this.cpfCliente = cpfCliente;
    }

    public String getCnpjArtista() {
        return cnpjArtista;
    }

    public void setCnpjArtista(String cnpjArtista) {
        this.cnpjArtista = cnpjArtista;
    }

    public int getIdCarrinho() {
        return idCarrinho;
    }

    public void setIdCarrinho(int idCarrinho) {
        this.idCarrinho = idCarrinho;
    }

    public String getOpcoesEntrega() {
        return opcoesEntrega;
    }

    public void setOpcoesEntrega(String opcoesEntrega) {
        this.opcoesEntrega = opcoesEntrega;
    }

    public double getValor() {
        return valor;
    }

    public void setValor(double valor) {
        this.valor = valor;
    }
}