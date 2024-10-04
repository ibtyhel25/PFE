package com.example.Backend.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Mvttest {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date date_creation;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date date_fin;
    private String obserevation;
    @ManyToOne(fetch = FetchType.EAGER)
    private Informationus informationus;


}
