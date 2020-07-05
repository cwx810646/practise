package com.huawei.config;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.ModelAndView;

import com.huawei.entity.Result;

@RestControllerAdvice
public class ExceptionHandlerConfig {
	private static Logger Logger = LoggerFactory.getLogger(ExceptionHandlerConfig.class);

	@Autowired
	private HttpServletRequest request;

	@ExceptionHandler(Exception.class)
	public Object exceptionHandler(Exception e) {
		Logger.error(e.getMessage());
		if (isAjax()) {
			return Result.error();
		}
        ModelAndView mv = new ModelAndView("error");
        mv.addObject("errorType", "page");
        return mv;
	}

	private Boolean isAjax() {
		String XRequestedWith = request.getHeader("X-Requested-With");
		return (!StringUtils.isEmpty(XRequestedWith) && XRequestedWith.equals("XMLHttpRequest")) ? true : false;
	}
}
