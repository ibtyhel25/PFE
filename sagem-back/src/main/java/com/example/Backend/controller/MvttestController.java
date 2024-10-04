package com.example.Backend.controller;

import com.example.Backend.service.MvttestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

@RestController
@RequestMapping("/mvttest")
@CrossOrigin("*")
public class MvttestController {
    @Autowired
    private MvttestService mvttestService;
    @GetMapping("/getAll")
    public ResponseEntity<?> getAllMvt()
    {
        return ResponseEntity.ok(this.mvttestService.getAllMvttest());
    }
    @GetMapping("/filterBytwoDate/{dateD}/{dateF}")
    public ResponseEntity<?> getMvtBydate(@PathVariable("dateD") @DateTimeFormat(pattern = "yyyy-MM-dd") Date dateD, @PathVariable("dateF") @DateTimeFormat(pattern = "yyyy-MM-dd") Date dateF)
    {System.out.println(dateD);
        return ResponseEntity.ok(this.mvttestService.filterByDate(dateD,dateF));
    }


}
