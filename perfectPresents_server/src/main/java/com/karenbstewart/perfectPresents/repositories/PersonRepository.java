package com.karenbstewart.perfectPresents.repositories;

import com.karenbstewart.perfectPresents.models.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PersonRepository extends JpaRepository<Person, Long> {

}
