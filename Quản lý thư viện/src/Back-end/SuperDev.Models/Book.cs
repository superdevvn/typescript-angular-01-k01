﻿using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;

namespace SuperDev.Models
{
    public partial class SuperDevDbContext
    {
        public DbSet<Book> Books { get; set; }
    }

    public class Book
    {

        public int Id { get; set; }

        public int CategoryId { get; set; }

        public string Code { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public bool IsActived { get; set; }

        [ForeignKey("CategoryId")]
        public virtual Category Category { get; set; }
    }
}
