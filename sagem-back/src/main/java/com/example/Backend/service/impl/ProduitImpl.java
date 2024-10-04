package com.example.Backend.service.impl;

import com.example.Backend.models.Produit;
import com.example.Backend.repo.ProduitRepository;
import com.example.Backend.service.ProduitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ProduitImpl implements ProduitService {
    @Autowired
    private ProduitRepository produitRepository;
    @Override
    public List<Produit> getAllProduits() {
        return this.produitRepository.findAll();
    }
}
