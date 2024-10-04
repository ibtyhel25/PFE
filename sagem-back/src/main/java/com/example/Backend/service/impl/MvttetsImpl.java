package com.example.Backend.service.impl;

import com.example.Backend.models.Magasin;
import com.example.Backend.models.Mvttest;
import com.example.Backend.repo.MvttestRepository;
import com.example.Backend.service.MagasinService;
import com.example.Backend.service.MvttestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class MvttetsImpl implements MvttestService {
@Autowired
private MvttestRepository mvttestRepository;

    @Override
    public List<Mvttest> getAllMvttest() {

            return this.mvttestRepository.findAll();

    }

    @Override
    public List<Mvttest> filterByDate(Date dateD, Date dateF) {
        return this.mvttestRepository.filterByDate(dateD,dateF);
    }
}
