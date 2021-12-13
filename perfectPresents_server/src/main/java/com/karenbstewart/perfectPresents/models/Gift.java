package com.karenbstewart.perfectPresents.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "gifts")
public class Gift implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "gift_url")
    private String gift_url;

    @Column(name = "price")
    private Double price;

    @JsonIgnoreProperties(value = "gifts")
    @ManyToOne
    @JoinColumn(name = "person_id", nullable = false)
    private Person person;

    public Gift(String title, String gift_url, Double price, Person person) {
        this.title = title;
        this.gift_url = gift_url;
        this.price = price;
        this.person = person;
    }

    public Gift() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getGift_url() {
        return gift_url;
    }

    public void setGift_url(String gift_url) {
        this.gift_url = gift_url;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Person getPerson() {
        return person;
    }

    public void setPerson(Person person) {
        this.person = person;
    }
}
