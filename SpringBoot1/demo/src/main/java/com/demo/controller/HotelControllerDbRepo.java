package com.demo.controller;

import java.util.List;
import java.util.Optional;
import com.demo.entity.Hotel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.demo.repository.HotelRepository;

@RestController
@RequestMapping("api/v2")
@CrossOrigin(origins="http://localhost:4200")
public class HotelControllerDbRepo {

    @Autowired
    private HotelRepository hotelRepository;
    // display in angular
    @GetMapping("/hotel")
    public List<Hotel> getBookingList() {
        return hotelRepository.findAll();
    }

    //add to db
    @PostMapping("/hotel")
    public Hotel createHotel(@RequestBody Hotel hotel) {
        return hotelRepository.save(hotel);
    }

    // Delete hotel by ID
    @DeleteMapping("/hotel/{id}")
    public Hotel deleteHotelById(@PathVariable(value = "id") Integer id) {
        Hotel existingHotel = hotelRepository.findById(id).get();
        hotelRepository.delete(existingHotel);
        return existingHotel;
    }

    // Get a specific booking by ID
    @GetMapping("/hotel/{id}")
    public Hotel getHotelById(@PathVariable(value = "id") Integer id) {
        Optional<Hotel> hotel = hotelRepository.findById(id);
        return hotel.orElse(null);  // If not found, return null or handle as needed
    }

    // Update booking
    @PutMapping("/hotel/{id}")
    public Hotel updateHotel(@PathVariable(value = "id") Integer id, @RequestBody Hotel hotelDetails) {
        Optional<Hotel> existingHotel = hotelRepository.findById(id);
        if (existingHotel.isPresent()) {
            Hotel hotel = existingHotel.get();
            // Update fields
            hotel.setName(hotelDetails.getName());
            hotel.setLocation(hotelDetails.getLocation());
            hotel.setPricePerNight(hotelDetails.getPricePerNight());
            hotel.setAvailability(hotelDetails.getAvailability());
            hotel.setContact(hotelDetails.getContact());
            hotel.setDateAdded(hotelDetails.getDateAdded());
            return hotelRepository.save(hotel);
        }
        return null;
    }}




