package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import javax.servlet.http.HttpSession;
import java.util.Optional;

@Controller
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/login")
    public String login(Model model) {
        model.addAttribute("user", new User());
        return "login";
    }

    @PostMapping("/login")
    public String loginUser(@ModelAttribute("user") User user, HttpSession session, Model model) {
        Optional<User> userOpt = userService.findByStudentId(user.getStudentId());

        if (userOpt.isPresent() && userOpt.get().getPassword().equals(user.getPassword())) {
            session.setAttribute("user", userOpt.get());
            return "redirect:/";
        } else {
            model.addAttribute("error", "Invalid student ID or password");
            return "login";
        }
    }

    @GetMapping("/logout")
    public String logout(HttpSession session) {
        session.invalidate();
        return "redirect:/";
    }

    @GetMapping("/register")
    public String register(Model model) {
        model.addAttribute("user", new User());
        return "register";
    }

    @PostMapping("/register")
    public String registerUser(@ModelAttribute("user") User user, Model model) {
        try {
            userService.save(user);
            return "redirect:/login";
        } catch (IllegalStateException e) {
            model.addAttribute("error", "User already exists");
            return "register";
        }
    }
}
