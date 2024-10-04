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
@NoArgsConstructor
@AllArgsConstructor
//suprime artile
//change nomvers article
public class Produit {
    @Id
@GeneratedValue(strategy = GenerationType.AUTO)
private Long id;
    private String code_produit;
    @Temporal(TemporalType.DATE)
    private Date date_creation;
    @Temporal(TemporalType.DATE)
    private  Date date_fin;
    private String designation;
    @OneToMany(mappedBy = "produit", cascade = CascadeType.ALL)
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Collection<Informationus> informationuses;
    @ManyToOne(fetch = FetchType.EAGER)
    private Status status;

}
