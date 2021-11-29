namespace API.Models
{
    public class LivroEmprestado
    {
          public int id {get; set;}
          public string nome {get; set;}

          public int AlunoId {get; set;}

          public Aluno Aluno {get; set;}
    }
}