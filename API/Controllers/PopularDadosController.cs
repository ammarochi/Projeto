using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/popular")]
    public class PopularDadosController : ControllerBase
    {
        private readonly DataContext _context;
        public PopularDadosController(DataContext context)
        {
            _context = context;
        }

        //POST: api/popular/create
        [HttpPost]
        [Route("create")]
        public IActionResult Create()
        {
          
            _context.Livros.AddRange(new Livro[]
                {
                    new Livro   { id = 1, nome = "A Peste", autor = "Albert Camus" },
                    new Livro   { id = 2, nome = "Biografia Steve Jobs", autor = "Walter Isaacson" },
                    new Livro   { id = 3, nome = "Harry Potter", autor = " J. K. Rowling" },
                }
            );
             _context.Alunos.AddRange(new Aluno[]
                {
                    new Aluno   { id = 1, nome = "Matheus", sobrenome = "Souza", telefone = "99115", cpf = "123"},
                    new Aluno   { id = 2, nome = "Amanda", sobrenome = "Marochi", telefone = "99225", cpf = "456"},
                    new Aluno   { id = 3, nome = "Julia", sobrenome = "Scheffer", telefone = "99335", cpf = "789"},
                }
            );
            _context.SaveChanges();
            return Ok(new { message = "Dados inicializados com sucesso!" });
        }
    }
}