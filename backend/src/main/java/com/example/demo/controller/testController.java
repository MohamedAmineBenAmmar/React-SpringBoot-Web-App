package com.example.demo.controller;

import com.example.demo.model.Person;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class testController {

    @GetMapping("/test1")
    public boolean index() {
        return false;
    }

    @GetMapping("/test2")
    public String getWithParam(@RequestParam String nom) {
        return "bravo ! : "+nom;
    }

    @GetMapping("/test21")
    public String getWithParam1(@RequestParam String nom, @RequestParam String prenom) {
        return "bravo ! : "+nom.toUpperCase()+" "+prenom.toUpperCase();
    }

    @GetMapping("/test3")
    public double getWithParam() {
        return Math.random()*100;
    }

    @GetMapping("/test4")
    public Person getperson() {
        return new Person(Long.valueOf(0),"romdhani","salim",28);
    }

}