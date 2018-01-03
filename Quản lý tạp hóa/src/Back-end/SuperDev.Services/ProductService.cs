﻿using System.Collections.Generic;
using SuperDev.Models;
using SuperDev.Repositories;

namespace SuperDev.Services
{
    public class ProductService
    {
        public Product PersistProduct(Product product)
        {
            var productRepository = new ProductRepository();
            if (product.Id > 0) return productRepository.Update(product);
            return productRepository.Create(product);
        }

        public IEnumerable<Product> GetList()
        {
            var productRepository = new ProductRepository();
            return productRepository.GetEntities();
        }

        public Product GetById(int id)
        {
            var productRepository = new ProductRepository();
            return productRepository.GetEntity(id);
        }
    }
}
