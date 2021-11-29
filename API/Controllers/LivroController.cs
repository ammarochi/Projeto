using Microsoft.AspNetCore.Mvc;
using API.Data;
using API.Models;
using System.Linq;

namespace API.Controllers
{
      [ApiController]
    [Route("api/livro")]
    public class LivroController  : ControllerBase{
    private readonly DataContext _context;
        public LivroController(DataContext context) => _context = context;

    
        [HttpPost]
        [Route("create")]
        public IActionResult Create([FromBody] Livro livro)
        {
            _context.Livros.Add(livro);
            _context.SaveChanges();
            return Created("", livro);
        }

        //GET: api/livro/list
        [HttpGet]
        [Route("list")]
        public IActionResult List() => Ok(_context.Livros.ToList());

        //GET: api/livro/getbyid/1
        [HttpGet]
        [Route("getbyid/{id}")]
        public IActionResult GetById([FromRoute] int id)
        {
            //Buscar um livro pela chave primária
            Livro livro = _context.Livros.Find(id);
            if (livro == null)
            {
                return NotFound();
            }
            return Ok(livro);
        }

        //DELETE: api/livro/delete/
        [HttpDelete]
        [Route("delete/{nome}")]
        public IActionResult Delete([FromRoute] string nome)
        {
            //Expressão lambda
            //Buscar um livro pelo nome
            Livro livro = _context.Livros.FirstOrDefault
            (
                livro => livro.nome == nome
            );
            if (livro == null)
            {
                return NotFound();
            }
            _context.Livros.Remove(livro);
            _context.SaveChanges();
            return Ok(_context.Livros.ToList());
        }

        //PUT: api/livro/create
        [HttpPut]
        [Route("update")]
        public IActionResult Update([FromBody] Livro livro)
        {
            _context.Livros.Update(livro);
            _context.SaveChanges();
            return Ok(livro);
        }


    }
}