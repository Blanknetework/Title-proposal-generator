# Title Proposal Generator

A web application that generates and saves project title suggestions using multiple technologies.

## Technologies Used

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js (Express), PHP
- Database: MySQL
- Python for title generation

## System Architecture

1. Frontend (HTML/JavaScript)
   - User interface for generating and saving titles
   - Makes API calls to Node.js backend

2. Node.js Backend
   - Serves static files
   - Handles API routes
   - Executes Python script
   - Forwards save requests to PHP

3. PHP Backend
   - Handles database operations
   - Saves titles to MySQL

4. Python Script
   - Generates creative titles

## Setup Requirements

1. Node.js
2. PHP
3. MySQL
4. Python 3.x

## Installation

1. Clone the repository
2. Install Node.js dependencies:
```bash
npm install