import java.util.ArrayList;

public class Artista extends Cliente{
    private String cnpj;
    private ArrayList<String> categoriaArte;
    private String politicaEntregaFrete;
    private String descricao;
    private ArrayList<Produto> produtos;

    public Artista(String nome, String email, String cpf, String telefone, String senha, String endereco, String cnpj, ArrayList<String> categoriaArte, String politicaEntregaFrete, String descricao){
        super(nome, email, cpf, telefone, senha, endereco);
        this.cnpj = cnpj;
        categoriaArte = new ArrayList<String>();
        this.politicaEntregaFrete = politicaEntregaFrete;
        this.descricao = descricao;
        this.produtos = new ArrayList<Produto>();
    }

    //Sobrecarga de construtor
    public Artista(String nome, String email, String cpf, String telefone, String senha, String endereco, ArrayList<String> categoriaArte, String politicaEntregaFrete, String descricao){
        super(nome, email, cpf, telefone, senha, endereco);
        this.cnpj = null;
        categoriaArte = new ArrayList<String>();
        this.politicaEntregaFrete = politicaEntregaFrete;
        this.descricao = descricao;
        this.produtos = new ArrayList<Produto>();
    }

    //getters
    public String getCnpj(){
        return this.cnpj;
    }
    public ArrayList<String> getCategoriaArte(){
        return this.categoriaArte;
    }
    public String getPoliticaEntregaFrete(){
        return this.politicaEntregaFrete;
    }
    public String getDescricao(){
        return this.descricao;
    }
    public ArrayList<Produto> getProdutos(){
        return produtos;
    }

    //setters
    public void setCnpj(String novoCnpj){
        this.cnpj = novoCnpj;
    }
    public void setCategoriaArte (ArrayList<String> novaCategoriaArte){
        this.categoriaArte = novaCategoriaArte;
    }
    public void setPoliticaEntregaFrete(String novaPoliticaEntregaFrete){
        this.politicaEntregaFrete = novaPoliticaEntregaFrete;
    }
    public void setDescricao(String novaDescricao){
        this.descricao = novaDescricao;
    }

    //métodos
    public void cadastrarProduto(String id, String nome, ArrayList<String> categoria, String descricao, double preco, Artista artista){
        Produto p1 = new Produto(id, nome, categoria, descricao, preco, artista);
    }

    // - cadastrarProduto(): void
    // - listarProdutos(): void
    // - calcularGanhos(): double

}