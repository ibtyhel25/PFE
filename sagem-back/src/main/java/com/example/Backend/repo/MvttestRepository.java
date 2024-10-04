package com.example.Backend.repo;

import com.example.Backend.models.Informationus;
import com.example.Backend.models.Mvttest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Date;
import java.util.List;

public interface MvttestRepository extends JpaRepository<Mvttest,Long> {
    @Query("select m from Mvttest m where m.date_creation>=:dateD and m.date_creation<=:dateF")
    List<Mvttest> filterByDate(@Param("dateD") Date dateD , @Param("dateF") Date dateF);
}
