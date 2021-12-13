package com.karenbstewart.perfectPresents.models;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "gifts")
public class Gift implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(title = "title")
    private String title;

    @Column(name = "")
    private String url;
    private Double price;
}
