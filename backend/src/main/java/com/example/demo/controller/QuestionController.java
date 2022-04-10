package com.example.demo.controller;

//import com.example.demo.model.Person;
import com.example.demo.model.Question;
//import com.example.demo.repository.PersonRepository;
import com.example.demo.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
public class QuestionController {
    @Autowired
    QuestionRepository questionRepository;

    List<String> questionList = Arrays.asList("Existe-t-il une représentation du personnel ?",
            "Des réunions sont-elles régulièrement organisées ?",
            "Comment se passent les réunions ?",
            "Les revendications sont-elles agressives ?");


    //http://localhost:8080/question1
    @GetMapping("/question1")
    public List<Question> getall()
    {
        return questionRepository.findAll();
    }

    @GetMapping("/questionById")
    public Optional<Question> getById(@RequestParam Long id)

    {
        return questionRepository.findById(id);
    }

    //http://localhost:8080/addPerson?label=romdhani&reonse=jbjugyu
    @GetMapping("/addQuestion")
    public Question add(@RequestParam String label, @RequestParam int reponse)
    {
        Question q = new Question(0, label, reponse);
        return questionRepository.save(q);
    }
    //http://localhost:8080/deleteByID?id=1
    @GetMapping("/deleteByIDq")
    public String update(@RequestParam long id) {
        questionRepository.deleteById(id);
        return "done";
    }
    //bech tasti hedha lezmek outil par exepmle postman
    /*
    http://localhost:8080/addPersonPost
    body raw json
    {"nom":"romdhani","prenom":"salim","age":0}
     */
    @PostMapping("addQuestionPost")
    public Question addQestion(@RequestBody Question q){
        return questionRepository.save(q);
    }

    //hedhi post dont type n7ottpouh post fel postman (type post/ body/row/json
    @PostMapping("/saveAll")
    public List<Question> save(@RequestBody List<Question> questionList){
            return  questionRepository.saveAll(questionList);
    }

    @GetMapping("getModelQuestion")
    List<Question> getallQuestionModel(){
        return questionList.stream().map(a->{
            Question q = new Question();
            q.setLabel(a);
            return q;
        }).collect(Collectors.toList());
    }


    @GetMapping("getStatistique")
    Map<String, Double> getStat(){
        return questionRepository.findAll()
                .stream()
                .collect(Collectors.groupingBy(Question::getLabel,Collectors.averagingDouble(Question::getReponse)));
    }


}
