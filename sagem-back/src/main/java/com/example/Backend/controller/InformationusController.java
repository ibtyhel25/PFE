package com.example.Backend.controller;

import com.example.Backend.service.InformationusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/informationUS")
@CrossOrigin("*")
public class InformationusController {
    @Autowired
    private InformationusService informationusService;
    @GetMapping("/getAll")
    public ResponseEntity<?> getAllUS()
    {

        return ResponseEntity.ok(this.informationusService.getAllInforemationus());
    }

    @GetMapping("/filterByCode/{code}")
    public ResponseEntity<?> filetrByDate(@PathVariable("code") String code)  {

        return ResponseEntity.ok(this.informationusService.getByCodeus(code));
    }
    @GetMapping("/filterByMagasin/{codeUS}/{codeM}")
    public ResponseEntity<?> filetrByMagasin(@PathVariable("codeUS") String codeUS,@PathVariable("codeM") String codeM)  {
        return ResponseEntity.ok(this.informationusService.filterByMagasin(codeUS,codeM));
    }
    @GetMapping("/filterByProduit/{codeUs}/{codeP}")
    public ResponseEntity<?> filterByProduit(@PathVariable("codeUs") String codeUs,@PathVariable("codeP") String codeP)  {
        return ResponseEntity.ok(this.informationusService.filterByProduit(codeUs,codeP));
    }
}
