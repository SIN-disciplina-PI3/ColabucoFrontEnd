public class Pedido {
    private String id;
    private String cpfCliente;
    private String cnpjArtista;
    private String endereco;
    private String opcoesEntrega;
    private double valor;

    public Pedido(String id, String cpfCliente, String endereco, double valor){
        this.id = id;
        this.cpfCliente = cpfCliente;
        this.endereco = endereco;
        this.valor = valor;
    }

    //getters
    public String getId() {
        return id;
    }
    public String getCpfCliente() {
        return cpfCliente;
    }
    public String getCnpjArtista() {
        return cnpjArtista;
    }
    public String getEndereco() {
        return endereco;
    }
    public String getOpcoesEntrega() {
        return opcoesEntrega;
    }
    public double getValor() {
        return valor;
    }

    //setters
    public void setCpfCliente(String cpfCliente) {
        this.cpfCliente = cpfCliente;
    }
    public void setCnpjArtista(String cnpjArtista) {
        this.cnpjArtista = cnpjArtista;
    }
    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }
    public void setOpcoesEntrega(String opcoesEntrega) {
        this.opcoesEntrega = opcoesEntrega;
    }
    public void setValor(double valor) {
        this.valor = valor;
    }
}