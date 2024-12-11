package com.demo.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "HOTELS")
public class Hotel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "HOTEL_ID")
    private int hotelid;  // Primary key field

    @Column(name = "NAME", nullable = false)
    private String name;

    @Column(name = "LOCATION", nullable = false)
    private String location;

    @Column(name = "PRICE", nullable = false)
    private int price;

    @Column(name = "AVAILABILITY", nullable = false)
    private String availability;

    @Column(name = "CONTACT")
    private String contact;

    @Column(name = "DATE_ADDED", nullable = false)
    private java.util.Date dateAdded;

    // Default constructor
    public Hotel() {
    }

    // Constructor with all fields
    public Hotel(int hotelid, String name, String location, int price, String availability, String contact, java.util.Date dateAdded) {
        this.hotelid = hotelid;
        this.name = name;
        this.location = location;
        this.price = price;
        this.availability = availability;
        this.contact = contact;
        this.dateAdded = dateAdded;
    }

    // Getters and Setters
    public int getHotelId() {
        return hotelid;
    }

    public void setHotelId(int hotelid) {
        this.hotelid = hotelid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public int getPricePerNight() {
        return price;
    }

    public void setPricePerNight(int price) {
        this.price = price;
    }

    public String getAvailability() {
        return availability;
    }

    public void setAvailability(String availability) {
        this.availability = availability;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public java.util.Date getDateAdded() {
        return dateAdded;
    }

    public void setDateAdded(java.util.Date dateAdded) {
        this.dateAdded = dateAdded;
    }
}
