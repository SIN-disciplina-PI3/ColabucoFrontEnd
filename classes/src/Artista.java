import java.util.ArrayList;

public class Artista{
    private String cnpj;
    private ArrayList<String> categoriaArte;
    private String politicaEntregaFrete;
    private String descricao;
    private ArrayList<Produto> produtos;

    public Artista(String cnpj, ArrayList<String> categoriaArte, String politicaEntregaFrete, String descricao, ArrayList<Produto> produtos){
        this.cnpj = cnpj;
        categoriaArte = new ArrayList<String>();
        this.politicaEntregaFrete = politicaEntregaFrete;
        this.descricao = descricao;
        produtos = new ArrayList<Produto>();
    }

    //Sobrecarga de construtor
    public Artista(ArrayList<String> categoriaArte, String politicaEntregaFrete, String descricao, ArrayList<Produto> produtos){
        this.cnpj = null;
        categoriaArte = new ArrayList<String>();
        this.politicaEntregaFrete = politicaEntregaFrete;
        this.descricao = descricao;
        produtos = new ArrayList<Produto>();
    }

    public String getCnpj(getIdProduto){
        return this.cnpj;
    }
    public void setCnpj(String novoCnpj){
        this.cnpj = novoCnpj;
    }

    public ArrayList<String> getCategoriaArte(getIdProduto){
        return this.categoriaArte;
    }
    public void setCategoriaArte (ArrayList<String> novaCategoriaArte){
        this.categoriaArte = novaCategoriaArte;
    }

    public String getPoliticaEntregaFrete(){
        return this.politicaEntregaFrete;
    }
    public void setPoliticaEntregaFrete(String novaPoliticaEntregaFrete){
        this.politicaEntregaFrete = novaPoliticaEntregaFrete;
    }

    public String getDescricao(){
        return this.descricao;
    }
    public void setDescricao(String novaDescricao){
        this.descricao = novaDescricao;
    }

    public ArrayList<Produto> getProdutos(){
        return produtos;
    }
    public void setProdutos(ArrayList<Produto> novaLista){
        this.produtos = novaLista;
    } 

    public void cadastrarProduto(String id, String nome, ArrayList<String> categoria, String descricao, double preco, Artista artista){
        Produto p1 = new Produto(id, nome, categoria, descricao, preco, artista)
    }
    //SETTERS
// - cadastrarProduto(): void
// - listarProdutos(): void
// - calcularGanhos(): double
}