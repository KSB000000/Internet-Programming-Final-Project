package com.example.demo;

public class TodoDTO {
    private Long id;
    private String description;
    private boolean completed;

    public TodoDTO() {
    }

    public TodoDTO(Long id, String description, boolean completed) {
        this.id = id;
        this.description = description;
        this.completed = completed;
    }

    public static TodoDTO fromEntity(Todo todo) {
        return new TodoDTO(todo.getId(), todo.getDescription(), todo.isCompleted());
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }
}
