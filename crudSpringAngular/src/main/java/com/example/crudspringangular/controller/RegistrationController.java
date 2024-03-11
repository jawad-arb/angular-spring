package com.example.crudspringangular.controller;

import com.example.crudspringangular.dao.UserRepository;
import com.example.crudspringangular.model.User;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class RegistrationController {
    private final UserRepository userRepository;


    @PostMapping("/register")
    public String register(@RequestBody User user) {
        userRepository.save(user);
        return "Hi " + user.getName() + " your Registration process successfully completed";
    }

    @GetMapping("/getAllUsers")
    public List<User> findAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/findUser/{email}")
    public List<User> findUser(@PathVariable String email) {
        return userRepository.findByEmail(email);
    }

    @DeleteMapping("/cancel/{id}")
    public List<User> cancelRegistration(@PathVariable int id) {
        userRepository.deleteById(id);
        return userRepository.findAll();
    }
}
