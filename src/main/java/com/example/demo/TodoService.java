package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoService {

    @Autowired
    private TodoRepository todoRepository;

    public Todo save(Todo todo) {
        return todoRepository.save(todo);
    }

    public List<Todo> findByUser(User user) {
        return todoRepository.findByUser(user);
    }

    public void deleteById(Long id) {
        todoRepository.deleteById(id);
    }

    public void updateStatus(Long id, boolean completed) {
        Todo todo = todoRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Todo not found"));
        todo.setCompleted(completed);
        todoRepository.save(todo);
    }
}
