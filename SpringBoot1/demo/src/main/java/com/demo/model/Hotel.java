package com.demo.model;

public class Hotel {

    private int hotelid;
    private String name;
    private String location;
    private int price;
    private String availability;
    private String contact;
    private java.util.Date dateAdded;

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
