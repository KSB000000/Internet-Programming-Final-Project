package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import javax.servlet.http.HttpSession;

@Controller
public class MainController {

    @GetMapping("/")
    public String main() {
        return "Main"; // Main.html을 반환
    }

    @GetMapping("/study")
    public String study(HttpSession session) {
        if (session.getAttribute("user") == null) {
            return "redirect:/?loginRequired=true";
        }
        return "Study"; // Study.html을 반환
    }

    @GetMapping("/exercise")
    public String exercise(HttpSession session) {
        if (session.getAttribute("user") == null) {
            return "redirect:/?loginRequired=true";
        }
        return "Exercise"; // Exercise.html을 반환
    }

    @GetMapping("/food")
    public String food(HttpSession session) {
        if (session.getAttribute("user") == null) {
            return "redirect:/?loginRequired=true";
        }
        return "Food"; // Food.html을 반환
    }
}
