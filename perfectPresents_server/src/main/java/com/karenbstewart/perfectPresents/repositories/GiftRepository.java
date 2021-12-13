package com.karenbstewart.perfectPresents.repositories;

import com.karenbstewart.perfectPresents.models.Gift;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GiftRepository extends JpaRepository<Gift, Long> {
}
