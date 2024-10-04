package com.example.Backend.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Collection;
import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor

public class Informationus {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO )
     private Long id;


    @ManyToOne(fetch = FetchType.EAGER)
    private Produit produit;
    private Long quantite;
    private Long consmation_pana;
    private Long ecart;
    private String codeus;
    private Long quantite_restant_theo;
    private Long quantite_restant_panaCim;
    @ManyToOne(fetch = FetchType.EAGER)
    private Magasin magasin;
    @OneToMany(mappedBy = "informationus", cascade = CascadeType.ALL)// cascade
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)//json
    private Collection<Mvttest> mvttests;
    @OneToMany(mappedBy = "informationus", cascade = CascadeType.ALL)
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Collection<Picklist> picklists;
    @ManyToOne(fetch = FetchType.EAGER)
    private Status status;


}
