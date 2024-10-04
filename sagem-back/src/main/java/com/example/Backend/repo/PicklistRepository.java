package com.example.Backend.repo;

import com.example.Backend.models.Picklist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Date;
import java.util.List;

public interface PicklistRepository extends JpaRepository<Picklist,Long> {

       List<Picklist> findByDateCreation(String date);

}
