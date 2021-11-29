namespace API.Models
{
    public class AlunoxLivroEmprestado
    {

        public AlunoxLivroEmprestado(int alunoId, Aluno aluno, int livroEmprestadoId, LivroEmprestado livroEmprestado)
        {
            this.AlunoId = alunoId;
            this.LivroEmprestadoId = livroEmprestadoId;

        }
        public AlunoxLivroEmprestado()
        
        {
         

        }
        public int Id { get; set; }
        public int AlunoId { get; set; }
        public Aluno Aluno { get; set; }
        public int LivroEmprestadoId { get; set; }
        public LivroEmprestado LivroEmprestado { get; set; }

    }
}