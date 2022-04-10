package com.example.demo.controller;

import com.example.demo.model.Person;
import com.example.demo.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

/*
http://localhost:8080/h2-console
org.h2.Driver
jdbc:h2:file:./data/demo
sa
password
 */

@RestController
public class PersonController {
    @Autowired
    PersonRepository personRepository;

    //http://localhost:8080/persons1
    @GetMapping("/persons1")
    public List<Person> getall()
    {
        return personRepository.findAll();
    }

    @GetMapping("/personById")
    public Optional<Person> getById(@RequestParam Long id)

    {
        return personRepository.findById(id);
    }

    //http://localhost:8080/addPerson?nom=romdhani&prenom=salim
    @GetMapping("/addPerson")
    public Person add(@RequestParam String nom, @RequestParam String prenom, @RequestParam int age)
    {
        Person p = new Person(0, nom, prenom, 0);
        return personRepository.save(p);
    }
    //http://localhost:8080/deleteByID?id=1
    @GetMapping("/deleteByID")
    public String update(@RequestParam long id) {
        personRepository.deleteById(id);
        return "done";
    }
    //bech tasti hedha lezmek outil par exepmle postman
    /*
    http://localhost:8080/addPersonPost
    body raw json
    {"nom":"romdhani","prenom":"salim","age":0}
     */
    @PostMapping("addPersonPost")
    public Person addPerson(@RequestBody Person p){
        return personRepository.save(p);
    }
}
