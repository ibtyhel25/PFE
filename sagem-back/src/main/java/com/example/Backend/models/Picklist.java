package com.example.Backend.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Picklist {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String num_picklist;
    private String dateCreation;
    @Temporal(TemporalType.DATE)
    private Date date_servi;
    @Temporal(TemporalType.DATE)
    private Date date_reception;
    private String typePicklist;
    @ManyToOne(fetch = FetchType.EAGER)
    private Informationus informationus;
    @ManyToOne(fetch = FetchType.EAGER)
    private LigneProduction ligneProduction;


}
