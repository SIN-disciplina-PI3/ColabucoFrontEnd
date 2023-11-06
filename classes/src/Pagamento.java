public class Pagamento {
    private String id;
    private String formaPagamento;
    private int idTransacao;

    public Pagamento(String id, String formaPagamento, int idTransacao){
        this.id = id;
        this.formaPagamento = formaPagamento;
        this.idTransacao = idTransacao;
    }


    public String getId() {
        return id;
    }

    public String getFormaPagamento() {
        return formaPagamento;
    }


    public int getIdTransacao() {
        return idTransacao;
    }


}
