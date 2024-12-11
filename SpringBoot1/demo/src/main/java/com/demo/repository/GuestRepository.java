package com.demo.repository;

import com.demo.entity.Guest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface GuestRepository  extends  JpaRepository<Guest, Integer> {
}

