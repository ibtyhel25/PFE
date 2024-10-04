package com.example.Backend.repo;

import com.example.Backend.models.Informationus;
import com.example.Backend.models.Picklist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface InformatiousRepository extends JpaRepository<Informationus,Long> {
    List<Informationus> findByCodeus(String code);
    @Query("select v from Informationus v where v.codeus=:codeUS and v.magasin.code_magasin=:codeM")
    List <Informationus> filterBymagasinus(@Param("codeUS") String codeUS ,@Param("codeM") String codeM);
    @Query("select v from Informationus v where v.codeus=:codeUs and v.produit.code_produit=:codeP")
    List <Informationus> filterByproduit(@Param("codeUs") String codeUs ,@Param("codeP") String codeP);



}
