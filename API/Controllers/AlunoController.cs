using API.Data;
using Microsoft.AspNetCore.Mvc;
using API.Models;
using System.Linq;

namespace API.Controllers
{
      [ApiController]
    [Route("api/aluno")]
    public class AlunoController  : ControllerBase{
    private readonly DataContext _context;
        public AlunoController(DataContext context) => _context = context;

    
        [HttpPost]
        [Route("create")]
        public IActionResult Create([FromBody] Aluno aluno)
        {
            _context.Alunos.Add(aluno);
            _context.SaveChanges();
            return Created("", aluno);
        }

        //GET: api/aluno/list
        [HttpGet]
        [Route("list")]
        public IActionResult List() => Ok(_context.Alunos.ToList());

        //GET: api/aluno/getbyid/1
        [HttpGet]
        [Route("getbyid/{id}")]
        public IActionResult GetById([FromRoute] int id)
        {
            //Buscar um aluno pela chave primária
            Aluno aluno = _context.Alunos.Find(id);
            if (aluno == null)
            {
                return NotFound();
            }
            return Ok(aluno);
        }

        //DELETE: api/aluno/delete/
        [HttpDelete]
        [Route("delete/{nome}")]
        public IActionResult Delete([FromRoute] string nome)
        {
            //Expressão lambda
            //Buscar um aluno pelo nome
            Aluno aluno = _context.Alunos.FirstOrDefault
            (
                aluno => aluno.nome == nome
            );
            if (aluno == null)
            {
                return NotFound();
            }
            _context.Alunos.Remove(aluno);
            _context.SaveChanges();
            return Ok(_context.Alunos.ToList());
        }

        //PUT: api/aluno/create
        [HttpPut]
        [Route("update")]
        public IActionResult Update([FromBody] Aluno aluno)
        {
            _context.Alunos.Update(aluno);
            _context.SaveChanges();
            return Ok(aluno);
        }


    }
}