import java.util.ArrayList;

public class Produto {
    private String id;
    private String nome;
    private ArrayList<String> categoria;
    private String descricao;
    private double preco;
    private Artista artista;

    public Produto(String id, String nome, ArrayList<String> categoria, String descricao, double preco, Artista artista){
        this.id = id;
        this.nome = nome;
        this.categoria = categoria;
        this.descricao = descricao;
        this.preco = preco;
        this.artista = artista;
    }

    public String getId() {
        return id;
    }
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public ArrayList<String> getCategoria() {
        return categoria;
    }

    public void setCategoria(ArrayList<String> categoria) {
        this.categoria = categoria;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public double getPreco() {
        return preco;
    }

    public void setPreco(double preco) {
        this.preco = preco;
    }
}
