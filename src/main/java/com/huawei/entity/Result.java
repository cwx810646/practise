package com.huawei.entity;

import java.util.HashMap;

public class Result<T> extends HashMap<String, Object> {
	private static final long serialVersionUID = 1L;

	private static final Integer SUC_CODE = 200;

	private static final Integer EMPTY_CODE = 0;

	private static final Integer ERROR_CODE = 500;

	private static final String SUC = "success";

	private static final String ERROR = "error";

	private Integer code;

	private String msg;

	private T data;

	public static Result<?> error() {
		Result<Object> res = new Result<>();
		res.code = ERROR_CODE;
		res.msg = ERROR;
		return res;
	}

	public static Result<?> ok(Object data) {
		Result<Object> res = new Result<Object>();
		res.code = SUC_CODE;
		res.msg = SUC;
		res.data = data;
		return res;
	}

	public static Result<?> empty() {
		Result<Object> res = new Result<Object>();
		res.code = EMPTY_CODE;
		res.msg = SUC;
		return  res;
	}

	public Integer getCode() {
		return code;
	}

	public void setCode(Integer code) {
		this.code = code;
	}

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}

	public T getData() {
		return data;
	}

	public void setData(T data) {
		this.data = data;
	}

}
