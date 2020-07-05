package com.huawei.contoller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("page")
public class PageController {
	
	@RequestMapping("index")
	public Object index() {
	   ModelAndView mv = new ModelAndView("index");
	   return mv;
    }
	
	@RequestMapping("followPoint")
	public Object followPoint() {
	   ModelAndView mv = new ModelAndView("followPoint");
	   return mv;
    }
	
	@RequestMapping("goldenLayout")
	public Object goldenLayout() {
	   ModelAndView mv = new ModelAndView("goldenLayout");
	   return mv;
    }
}
