package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/todos")
public class TodoController {

    @Autowired
    private TodoService todoService;

    @PostMapping
    public TodoDTO createTodo(@RequestBody Todo todo, HttpSession session) {
        User user = (User) session.getAttribute("user");
        if (user == null) {
            throw new IllegalStateException("User not logged in");
        }
        todo.setUser(user);
        Todo savedTodo = todoService.save(todo);
        return TodoDTO.fromEntity(savedTodo);
    }

    @GetMapping
    public List<TodoDTO> getTodos(HttpSession session) {
        User user = (User) session.getAttribute("user");
        if (user == null) {
            throw new IllegalStateException("User not logged in");
        }
        return todoService.findByUser(user).stream()
                .map(TodoDTO::fromEntity)
                .collect(Collectors.toList());
    }

    @PutMapping("/{id}")
    public void updateTodoStatus(@PathVariable Long id, @RequestBody Todo todo) {
        todoService.updateStatus(id, todo.isCompleted());
    }

    @DeleteMapping("/{id}")
    public void deleteTodoById(@PathVariable Long id) {
        todoService.deleteById(id);
    }
}
