package com.example.Backend.controller;

import com.example.Backend.service.MagasinService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/magasin")
@CrossOrigin("*")
public class MagasinController {
    @Autowired
    private MagasinService magasinService;
    @GetMapping("/getAll")
    public ResponseEntity<?> getAllMagasin()
    {
        return ResponseEntity.ok(this.magasinService.getAllMagasin());
    }
}
