using API.Models;
using Microsoft.EntityFrameworkCore;


namespace API.Data
{
    public class DataContext : DbContext
    {
        public DataContext (DbContextOptions<DataContext> options) : base(options)
        { }

    public DbSet<Aluno> Alunos { get; set; }
    public DbSet<Livro> Livros { get; set; }
    public DbSet<LivroEmprestado> LivrosEmprestados { get; set; }
    public DbSet<AlunoxLivroEmprestado> AlunosxLivrosEmprestados { get; set; }

    }
}