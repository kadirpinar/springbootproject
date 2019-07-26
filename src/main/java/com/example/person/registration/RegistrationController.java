package com.example.person.registration;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.person.security.user_details.CustomUserDetails;

@RestController
public class RegistrationController {

    @Autowired
    private RegistrationService registrationService;



    @PostMapping("/registration")
    public CustomUserDetails createUser(@RequestBody CustomUserDetails customUserDetails ){
       return registrationService.saveUser(customUserDetails);
    }
}
