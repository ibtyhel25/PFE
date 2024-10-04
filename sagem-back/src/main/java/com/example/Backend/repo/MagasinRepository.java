package com.example.Backend.repo;

import com.example.Backend.models.Magasin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MagasinRepository extends JpaRepository<Magasin,Long> {
}
