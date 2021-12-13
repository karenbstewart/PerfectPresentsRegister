package com.karenbstewart.perfectPresents.controllers;

import com.karenbstewart.perfectPresents.models.Gift;
import com.karenbstewart.perfectPresents.repositories.GiftRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class GiftController {
    @Autowired
    GiftRepository giftRepository;

    @GetMapping(value = "/gifts")
    public ResponseEntity<List<Gift>> getAllGifts(){
        return new ResponseEntity<>(giftRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/gifts/{id}")
    public ResponseEntity getGift(@PathVariable Long id){
        return new ResponseEntity<>(giftRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/gifts")
    public ResponseEntity<Gift> postGift(@RequestBody Gift gift){
        giftRepository.save(gift);
        return 
    }


}
