package com.example.person.registration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import com.example.person.security.user_details.CustomUserDetails;
import com.example.person.security.user_details.CustomUserDetailsRepository;

@Service
public class RegistrationService {

    @Autowired
    private CustomUserDetailsRepository customUserDetailsRepository;

    public CustomUserDetails saveUser(CustomUserDetails customUserDetails){
        final BCryptPasswordEncoder bCryptPasswordEncoder= new BCryptPasswordEncoder();
        final String encodedPassword = bCryptPasswordEncoder.encode(customUserDetails.getPassword());
        customUserDetails.setPassword(encodedPassword);
        return   customUserDetailsRepository.save(customUserDetails);
    }
}
