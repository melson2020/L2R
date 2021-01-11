package com.melson.starter;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

/**
 * Created by Nelson on 2020/6/5.
 */

public class Application extends SpringBootServletInitializer {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    /**
     * 工程打成war需要继承SpringBootServletInitializer，重写configure方法
     * @date 2018年12月7日
     * @author zxp
     */
    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
        return builder.sources(StarterApplication.class);
    }
}
