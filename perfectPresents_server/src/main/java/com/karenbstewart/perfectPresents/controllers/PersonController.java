package com.karenbstewart.perfectPresents.controllers;

import com.karenbstewart.perfectPresents.models.Person;
import com.karenbstewart.perfectPresents.repositories.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PersonController {

    @Autowired
    PersonRepository personRepository;

    @GetMapping(value = "/people")
    public ResponseEntity<List<Person>> getAllPeople(){
        return new ResponseEntity<List<Person>>(personRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/people/{id}")
    public ResponseEntity getShip(@PathVariable Long id){
        return new ResponseEntity<>(personRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/people")
    public ResponseEntity<Person> createPerson(@RequestBody Person person){
        personRepository.save(person);
        return new ResponseEntity<>(person, HttpStatus.OK);
    }

    @PatchMapping(value = "/people/{id}")
    public ResponseEntity<Person> updatePerson(@RequestBody Person person){
        personRepository.save(person);
        return new ResponseEntity<>(person, HttpStatus.OK);
    }

    // get one is depreciated ?? try using getById
    @DeleteMapping(value = "/people/{id}")
    public ResponseEntity<Person> deletePerson(@PathVariable Long id){
        Person found = personRepository.getById(id);
        personRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }


}
