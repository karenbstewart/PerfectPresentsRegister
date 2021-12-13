package com.karenbstewart.perfectPresents.controllers;

import com.karenbstewart.perfectPresents.repositories.GiftRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GiftController {
    @Autowired
    GiftRepository giftRepository;

}
