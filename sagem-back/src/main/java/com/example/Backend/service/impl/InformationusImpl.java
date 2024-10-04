package com.example.Backend.service.impl;

import com.example.Backend.models.Informationus;
import com.example.Backend.repo.InformatiousRepository;
import com.example.Backend.service.InformationusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class InformationusImpl implements InformationusService {
    @Autowired
    private InformatiousRepository informatiousRepository;
    @Override
    public List<Informationus> getAllInforemationus() {
        return this.informatiousRepository.findAll();
    }

    @Override
    public List<Informationus> getByCodeus(String code) {
        return this.informatiousRepository.findByCodeus(code);
    }

    @Override
    public List<Informationus> filterByMagasin(String codeUS,String codeM) {
        return this.informatiousRepository.filterBymagasinus(codeUS,codeM);
    }

    @Override
    public List<Informationus> filterByProduit(String codeUs, String codeP) {
        return this.informatiousRepository.filterByproduit(codeUs,codeP);
    }
}
