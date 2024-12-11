package com.demo.model;

import javax.xml.crypto.Data;
import java.util.Date;

public class Booking {

    private int bookingId;
    private int hotelId;
    private int guestId;
    private Date checkInDate;
    private Date checkOutDate;
    private int totalAmount;


    public Booking(int bookingId, int hotelId, int guestId, Date checkInDate,Date checkOutDate, int totalAmount) {
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

    public int getGuestId(){
        return guestId;
    }

    public int getHotelId(){
        return hotelId;
    }

    public Date getCheckInDate(){
        return checkInDate;
    }

    public Date getCheckOutDate(){
        return checkOutDate;
    }

    public int getTotalAmount(){
        return totalAmount;
    }




    public void setBookingId(int bookingId) {
        this.bookingId = bookingId;
    }
    public void setHotelId(int hotelId) {
        this.hotelId = hotelId;
    }
    public void setGuestId(int guestId){
        this.guestId=guestId;
    }
    public void setCheckInDate(Date checkInDate){
        this.checkInDate = checkInDate;
    }
    public void setCheckOutDate(Date checkOutDate){
        this.checkOutDate = checkOutDate;
    }
    public void setTotalAmount(int totalAmount){
        this.totalAmount = totalAmount;
    }


}
