package com.example.Backend.service;

import com.example.Backend.models.Informationus;
import com.example.Backend.models.Picklist;

import java.util.Date;
import java.util.List;

public interface PicklistService {
    public List<Picklist> getAllPicklist();
    public List<Picklist> filterByDate(String date);
}
