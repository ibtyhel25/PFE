package com.example.Backend.controller;

import com.example.Backend.models.Picklist;
import com.example.Backend.models.User;
import com.example.Backend.service.PicklistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

@RestController
@RequestMapping("/picklist")
@CrossOrigin("*")//?
public class PicklistController {
    @Autowired
    private PicklistService picklistService;
    @GetMapping("/getAll")
    public ResponseEntity<?> getAllpick()//?
    {

        return ResponseEntity.ok(this.picklistService.getAllPicklist());//?
    }
    @GetMapping("/filter/{date}")
    public ResponseEntity<?> filetrByDate(@PathVariable("date") String date)  {

        return ResponseEntity.ok(this.picklistService.filterByDate(date));
    }
}
