package com.demo.controller;

import java.util.List;
import java.util.Optional;
import com.demo.entity.Guest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.demo.repository.GuestRepository;

@RestController
@RequestMapping("api/v3")
@CrossOrigin(origins="http://localhost:4200")
public class GuestControllerDbRepo {
    @Autowired
    private GuestRepository  guestRepository;

    @GetMapping("/guest")
    public List<Guest> getGuestList() {
        return guestRepository.findAll();
    }


    @PostMapping("/guest")
    public Guest createGuest(@RequestBody Guest guest) {
        return guestRepository.save(guest);
    }


    @DeleteMapping("/guest/{id}")
    public Guest deleteGuestById(@PathVariable(value = "id") Integer id) {
        Guest existingGuest = guestRepository.findById(id).get();
        guestRepository.delete(existingGuest);
        return existingGuest;
    }


    @GetMapping("/guest/{id}")
    public Guest getGuestById(@PathVariable(value = "id") Integer id) {
        Optional<Guest> guest = guestRepository.findById(id);
        return guest.orElse(null);  // If not found, return null or handle as needed
    }


    @PutMapping("//{id}")
    public Guest updateGuest(@PathVariable(value = "id") Integer id, @RequestBody Guest guestDetails) {
        Optional<Guest> existingGuest = guestRepository.findById(id);
        if (existingGuest.isPresent()) {
            Guest guest = existingGuest.get();
            // Update fields
            guest.setName(guestDetails.getName());
            guest.setAge(guestDetails.getAge());
            guest.setGender(guestDetails.getGender());
            guest.setContact(guestDetails.getContact());
            guest.setEmail(guestDetails.getEmail());
            guest.setCheckInDate(guestDetails.getCheckInDate());
            guest.setCheckOutDate(guestDetails.getCheckOutDate());
            guest.setRoomNumber(guestDetails.getRoomNumber());
            guest.setRemarks(guestDetails.getRemarks());
            return guestRepository.save(guest);
        }
        return null;
    }
}






