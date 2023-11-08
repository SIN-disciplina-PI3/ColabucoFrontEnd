public class Cartao {
    private String nome;
    private String numCartao;
    private String codValidade;
    private String nomeTitular;
    private String bancoCartao;
    private String bandeira;
    private int cvv;

    //construtor
    public Cartao(String nome, String numCartao, String codValidade, String nomeTitular, String bancoCartao, String bandeira, int cvv) {
        this.nome = nome;
        this.numCartao = numCartao;
        this.codValidade = codValidade;
        this.nomeTitular = nomeTitular;
        this.bancoCartao = bancoCartao;
        this.bandeira = bandeira;
        this.cvv = cvv;
    }

    //getters
    public String getNome() {
        return nome;
    }
    public String getNumCartao() {
        return numCartao;
    }
    public String getCodValidade() {
        return codValidade;
    }
    public String getNomeTitular() {
        return nomeTitular;
    }
    public String getBancoCartao() {
        return bancoCartao;
    }
    public String getBandeira() {
        return bandeira;
    }
    public int getCvv() {
        return cvv;
    }

    //setters
    public void setNome(String nome) {
        this.nome = nome;
    }
    public void setNumCartao(String numCartao) {
        this.numCartao = numCartao;
    }
    public void setCodValidade(String codValidade) {
        this.codValidade = codValidade;
    }
    public void setNomeTitular(String nomeTitular) {
        this.nomeTitular = nomeTitular;
    }
    public void setBancoCartao(String bancoCartao) {
        this.bancoCartao = bancoCartao;
    }
    public void setBandeira(String bandeira) {
        this.bandeira = bandeira;
    }
    public void setCvv(int cvv) {
        this.cvv = cvv;
    }

    public boolean validarDadosCartao() {
        Cartao meuCartao = new Cartao("Lorenzo", "1234 5678 9012 3456", "01/27", "Lorenzo Leão", "Banco BB", "Visa", 823);

        if (meuCartao.validarDadosCartao()) {
            double valorCompra = 100.0;
            if (meuCartao.autorizaPagamento(valorCompra)) {
                meuCartao.registrarTransacao(valorCompra, "Comprou!!");
            } else {
                System.out.println("Pagamento não autorizado");
            }
        } else {
            System.out.println("Dados do cartão inválidos");
        }
        return true;
    }

    public boolean autorizaPagamento(double valor) {

        return true;
    }

    public void registrarTransacao(double valor, String descricao) {

        System.out.println("Transação registrada - Valor: " + valor + ", Descrição: " + descricao);
    }
}
