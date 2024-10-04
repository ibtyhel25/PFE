package com.example.Backend.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Collection;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Magasin {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String code_magasin;
    private String emplacement_magasin;
    @OneToMany(mappedBy = "magasin", cascade = CascadeType.ALL)
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Collection<Informationus> informationuses;

}
