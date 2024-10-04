package com.example.Backend.service;

import com.example.Backend.models.Informationus;
import com.example.Backend.models.User;

import java.util.List;

public interface InformationusService {
    public List<Informationus> getAllInforemationus();
    public List<Informationus> getByCodeus(String code);
    public List <Informationus> filterByMagasin(String codeUS,String codeM);
    public List <Informationus> filterByProduit(String codeUs,String codeP);

}
