package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User save(User user) {
        if (userRepository.findByStudentId(user.getStudentId()).isPresent()) {
            throw new IllegalStateException("이미 존재하는 사용자입니다.");
        }
        return userRepository.save(user);
    }

    public Optional<User> findByStudentId(String studentId) {
        return userRepository.findByStudentId(studentId);
    }

    public List<User> findAll() {
        return userRepository.findAll();
    }
}
