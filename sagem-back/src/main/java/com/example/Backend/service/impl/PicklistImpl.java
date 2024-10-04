package com.example.Backend.service.impl;

import com.example.Backend.models.Picklist;
import com.example.Backend.repo.PicklistRepository;
import com.example.Backend.service.PicklistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
@Service
public class PicklistImpl implements PicklistService {
    @Autowired
    private PicklistRepository picklistRepository;
    @Override
    public List<Picklist> getAllPicklist() {
        return this.picklistRepository.findAll();
    }

    @Override
    public List<Picklist> filterByDate(String date) {
        return this.picklistRepository.findByDateCreation(date);
    }
}
