package com.example.demo.repository;

import com.example.demo.model.Person;
import com.example.demo.model.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface QuestionRepository extends JpaRepository<Question, Long>, CrudRepository<Question, Long> {
}
