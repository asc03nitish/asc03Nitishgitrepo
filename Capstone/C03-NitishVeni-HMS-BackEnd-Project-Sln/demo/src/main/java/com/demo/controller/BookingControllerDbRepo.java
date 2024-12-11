package com.demo.controller;

import java.util.List;
import java.util.Optional;

import com.demo.entity.Booking;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.demo.repository.BookingRepository;

@RestController
@RequestMapping("api/v1")
@CrossOrigin(origins="http://localhost:4200")
public class BookingControllerDbRepo {

    @Autowired
    private BookingRepository bookingRepository;

    @GetMapping("/booking")
    public List<Booking> getBookingList() {
        return bookingRepository.findAll();
    }
    @GetMapping("/booking/{id}")
    public Booking getBookingById(@PathVariable(value = "id") Integer id) {
        Optional<Booking> booking = bookingRepository.findById(id);
        return booking.orElse(null);
    }


    @PutMapping("/booking/{id}")
    public Booking updateBooking(@PathVariable(value = "id") Integer id, @RequestBody Booking bookingDetails) {
        Optional<Booking> existingBooking = bookingRepository.findById(id);
        if (existingBooking.isPresent()) {
            Booking booking = existingBooking.get();
            // Update fields
            booking.setHotelId(bookingDetails.getHotelId());
            booking.setGuestId(bookingDetails.getGuestId());
            booking.setCheckInDate(bookingDetails.getCheckInDate());
            booking.setCheckOutDate(bookingDetails.getCheckOutDate());
            booking.setTotalAmount(bookingDetails.getTotalAmount());
            return bookingRepository.save(booking);
        }
        return null;
    }


    @PostMapping("/booking")
    public Booking createBooking(@RequestBody Booking booking) {
        return bookingRepository.save(booking);
    }


    @DeleteMapping("/booking/{id}")
    public Booking deleteBookingById(@PathVariable(value = "id") Integer id) {
        Optional<Booking> existingBooking = bookingRepository.findById(id);
        if (existingBooking.isPresent()) {
            bookingRepository.delete(existingBooking.get());
            return existingBooking.get();
        }
        return null;
    }
}
