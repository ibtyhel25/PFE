package com.example.Backend.controller;

import com.example.Backend.service.ProduitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/produit")
@CrossOrigin("*")
public class ProduitController {
    @Autowired
    private ProduitService produitService;
    @GetMapping("/getAll")
    public ResponseEntity<?> getAllProduit()
    {
        return ResponseEntity.ok(this.produitService.getAllProduits());
    }
}
