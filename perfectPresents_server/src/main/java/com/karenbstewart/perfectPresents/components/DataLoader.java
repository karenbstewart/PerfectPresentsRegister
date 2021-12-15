package com.karenbstewart.perfectPresents.components;

import com.karenbstewart.perfectPresents.models.Gift;
import com.karenbstewart.perfectPresents.models.Person;
import com.karenbstewart.perfectPresents.repositories.GiftRepository;
import com.karenbstewart.perfectPresents.repositories.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    PersonRepository personRepository;

    @Autowired
    GiftRepository giftRepository;

    public DataLoader() {
    }

    public void run(ApplicationArguments args) {
        Person Aiden = new Person("Aiden", "Stewart", "aiden@gmail.com");
        personRepository.save(Aiden);
        Person Sean = new Person("Séan", "Stewart", "sean@gmail.com");
        personRepository.save(Sean);
        Person Rachael = new Person("Rachael", "Bryce", "rachbryce@gmail.com");
        personRepository.save(Rachael);
        Person Savannah = new Person("Savannah", "Bryce", "sb@gmail.com");
        personRepository.save(Savannah);

        Gift Sloth_oodie = new Gift("sloth ooodie", "https://theoodie.co.uk/products/sloth-oodie?awc=23760_1639409335_04569aa40e930e8f248525fbc54f1b86", 59.00, Aiden);
        giftRepository.save(Sloth_oodie);
        Gift Sloth_bottle =  new Gift("sloth bottle", "https.theslothbottlecompany", 25.45, Aiden);
        giftRepository.save(Sloth_bottle);

        Gift raspberryPi = new Gift("Raspberry Pi 3B+", "https://techstuff", 34.94, Sean);
        giftRepository.save(raspberryPi);
        Gift fluffypenguin = new Gift("toy penguin", "https://Amazon", 26.00, Sean);
        giftRepository.save(fluffypenguin);

    }
}
