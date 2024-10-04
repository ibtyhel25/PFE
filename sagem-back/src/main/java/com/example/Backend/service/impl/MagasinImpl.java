package com.example.Backend.service.impl;

import com.example.Backend.models.Magasin;
import com.example.Backend.repo.MagasinRepository;
import com.example.Backend.service.MagasinService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class MagasinImpl implements MagasinService {
    @Autowired
    private MagasinRepository magasinRepository;
    @Override
    public List<Magasin> getAllMagasin() {
        return this.magasinRepository.findAll();
    }
}
