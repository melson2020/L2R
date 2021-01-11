package com.melson.starter;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @Author Nelson
 * @Description
 * @Date 2020/7/24
 */
@RestController
@RequestMapping(value = "/test")
public class testResoruce {
    @RequestMapping(value = "/hello")
    public String test(){
        return "helloWorld";
    }
}
