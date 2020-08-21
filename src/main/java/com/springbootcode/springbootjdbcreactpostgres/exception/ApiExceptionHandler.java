package com.springbootcode.springbootjdbcreactpostgres.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.time.ZoneId;
import java.time.ZonedDateTime;

@ControllerAdvice
public class ApiExceptionHandler {

    public static final HttpStatus BAD_REQUEST = HttpStatus.BAD_REQUEST;

    @ExceptionHandler(value = {ApiRequestException.class})
    public ResponseEntity<Object> handleApiRequestException(ApiRequestException e) {
        // 1. Create payload containing exception details
        ApiException apiException = new ApiException(
            e.getMessage(),
            BAD_REQUEST,
            ZonedDateTime.now(ZoneId.of("Z"))
        );

        // 2. Return response entity
        return new ResponseEntity<>(apiException, BAD_REQUEST);
    }
}
