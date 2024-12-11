package com.demo.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.util.Date;

@Entity
@Table(name = "BOOKINGS")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "BOOKING_ID")
    private int bookingId;  // Primary key field

    @Column(name = "GUEST_ID", nullable = false)
    private int guestId;

    @Column(name = "HOTEL_ID", nullable = false)
    private int hotelId;

    @Column(name = "CHECK_IN_DATE")
    private Date checkInDate;

    @Column(name = "CHECK_OUT_DATE")
    private Date checkOutDate;

    @Column(name = "TOTAL_AMOUNT", nullable = false)
    private int totalAmount;

    public Booking() {
    }


    public Booking(int bookingId, int hotelId, int guestId, Date checkInDate, Date checkOutDate, int totalAmount) {
        super();

        this.bookingId = bookingId;
        this.hotelId = hotelId;
        this.guestId = guestId;
        this.checkInDate = checkInDate;
        this.checkOutDate = checkOutDate;
        this.totalAmount = totalAmount;

    }

    public int getBookingId() {
        return bookingId;
    }

    public int getGuestId() {
        return guestId;
    }

    public int getHotelId() {
        return hotelId;
    }

    public Date getCheckInDate() {
        return checkInDate;
    }

    public Date getCheckOutDate() {
        return checkOutDate;
    }

    public int getTotalAmount() {
        return totalAmount;
    }


    public void setBookingId(int bookingId) {
        this.bookingId = bookingId;
    }

    public void setHotelId(int hotelId) {
        this.hotelId = hotelId;
    }

    public void setGuestId(int guestId) {
        this.guestId = guestId;
    }

    public void setCheckInDate(Date checkInDate) {
        this.checkInDate = checkInDate;
    }

    public void setCheckOutDate(Date checkOutDate) {
        this.checkOutDate = checkOutDate;
    }

    public void setTotalAmount(int totalAmount) {
        this.totalAmount = totalAmount;
    }


}

