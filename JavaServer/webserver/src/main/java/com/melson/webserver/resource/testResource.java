package com.melson.webserver.resource;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by Nelson on 2020/7/20.
 */
@RestController
@RequestMapping("/testweb")
public class testResource {
    @RequestMapping(value = "/hello")
    public String test() {
        try {
            //测试前台maskload 特意睡眠2秒
            Thread.sleep(2000);
            return "helloWorld from webserver";
        } catch (Exception e) {
            return "Exception catched";
        }
    }
}
