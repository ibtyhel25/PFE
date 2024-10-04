package com.example.Backend.service;

import com.example.Backend.models.Informationus;
import com.example.Backend.models.Mvttest;
import org.springframework.data.repository.query.Param;

import java.util.Date;
import java.util.List;

public interface MvttestService {
    public List<Mvttest> getAllMvttest();
    List<Mvttest> filterByDate(Date dateD,Date dateF);

}
