"use client";
import { useMutation } from "@tanstack/react-query";

import React, { useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "sonner";
import { logindata } from "../../service/blogService";
import Cookies from "js-cookie";
import PostBlog from "../../Compoents/PostBlog"

const Page = () => {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { mutate, isLoading, isSuccess, isError, error, data } = useMutation({
    mutationFn: logindata,
    onSuccess: (data) => {
      toast.success("Login sucessfully");
      Cookies.set('token', data.token, { expires: 7 })
      
    },
    onError: (err) => {
      toast.error("Invalid credentials");
    },
  });

  const token = Cookies.get("token");

  if (token) 
    return <PostBlog/>;

    return (
      <div>
        <Container className="d-flex align-items-center justify-content-center">
          <Row className="w-100">
            <Col xs={12} sm={10} md={6} lg={4} className="mx-auto">
              <div className="p-4 shadow rounded-4">
                <h3 className="text-center mb-4">Login</h3>
                <Form
                  onSubmit={() => {
                    mutate({
                      mobile,
                      password,
                    });
                  }}
                >
                  {/* Mobile Number */}
                  <Form.Group controlId="formMobile" className="mb-3">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder="Enter mobile number"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      required
                    />
                  </Form.Group>

                  {/* Password with Eye Toggle */}
                  <Form.Group controlId="formPassword" className="mb-4">
                    <Form.Label>Password</Form.Label>
                    <InputGroup>
                      <Form.Control
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <Button
                        variant="outline-secondary"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <FaEye size={16} />
                        ) : (
                          <FaEyeSlash size={16} />
                        )}
                      </Button>
                    </InputGroup>
                  </Form.Group>

                  <Button
                    variant="danger"
                    type="submit"
                    className="w-100 rounded-pill"
                  >
                    {isLoading ? "Logging in..." : "Login"}
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

export default Page;
