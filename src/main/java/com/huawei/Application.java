package com.huawei;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application {
   private static Logger log = LoggerFactory.getLogger(Application.class);
   public static void main(String[] args) {
	try {
		log.info("server start ...");
		SpringApplication.run(Application.class, args);
		log.info("... server end");
	} catch (Exception e) {
		log.error(e.getMessage());
	}
   }
}
