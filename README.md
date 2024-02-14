
<p align="center">
  <img src="https://res.cloudinary.com/runyshark1/image/upload/v1707709939/33Ho_ucktq0.gif" width="200" alt="Aether API](https://res.cloudinary.com/runyshark1/image/upload/v1707709243/5FC2_ml9ubh.gif)" />
</p>

# CleanArchitecture

## How to Run 🚀

Ensure you have **Node.js version 20 or later** installed for this project. This guide assumes you're using Node.js 20.

### Step 1: Install Dependencies

Begin by installing the project dependencies. Open your terminal and execute:

```bash
$ npm install
```

### Step 2: Docker Requirement

This project utilizes Docker for database services. Ensure Docker and Docker Compose are installed on your machine.

To start your local database server with Docker, run:

```bash
$ docker-compose up -d
```

### Step 3: Environment Variables Setup

Configure your environment variables for the project. Below is an example .env file:

```bash
PORT=3000
MONGO_URL=mongodb://mongo-user:123456@localhost:27017
MONGO_DB_NAME=mystore
JWT_SECRET=secret
```

#### Note on Swagger Documentation

Due to time constraints, Swagger documentation was not implemented for this project. The primary aim is to explore design patterns and adhere to best coding practices.

### Available Routes

Access the application through the following endpoints:

- **User Registration:** [http://localhost:3000/api/auth/register](http://localhost:3000/api/auth/register)
- **User Login:** [http://localhost:3000/api/auth/login](http://localhost:3000/api/auth/login)
- **Authentication Endpoint:** [http://localhost:3000/api/auth](http://localhost:3000/api/auth)

## Description 📖

In developing this backend in Node.js, I've focused on building a clean architecture, incorporating a wide range of design patterns and adhering to the best programming practices. I have rigorously followed the SOLID principles to ensure the code is modular, extensible, and easily maintainable. The patterns and techniques I've implemented are versatile, designed to be applicable across a wide variety of software projects, from scripts to frontend and backend applications. Below, I detail the key components of the architecture I've designed:

#### Domain-Driven Design (DDD)

I've based the backend architecture on DDD, allowing me to structure the system in a way that accurately reflects the complexities and boundaries of the business domain, facilitating the scalability and adaptability of the system.

#### Model-View-Controller (MVC)

I've adopted the MVC pattern in the presentation layer to separate the business logic from the user interface, improving code organization and supporting the separation of responsibilities.

#### Result Pattern

I've used this pattern to standardize the HTTP responses from the server, ensuring consistency and predictability in the communication interfaces.

#### Adapter Pattern

I've applied this pattern to all integrations with external dependencies, allowing me to abstract away from concrete implementations. Combined with DDD, this facilitates the substitution or modification of libraries and external services without significantly impacting the codebase.

#### Decorators

I've implemented decorators for elegant error handling and method binding, adding additional behaviors to classes and methods in a declarative manner.

#### Use Cases

I've centralized the business logic into use cases, allowing me to clearly define the system's operations and simplify its maintenance.

#### Data Transfer Objects (DTOs)

I've defined DTOs to map and validate incoming data, ensuring that only valid and relevant data is processed.

#### Entities

I've introduced an abstraction layer between the database and the backend to minimize the impact of database schema changes on the system, promoting code stability and flexibility.

#### Mappers

I normalize the data between the database and the backend to facilitate consistent and coherent data transformation and integration.

#### Repositories

This abstraction layer provides me with the flexibility to easily switch database technologies, supporting agile technological evolution.

#### Dependency Injection

To avoid hidden couplings and enhance the system's modularity, I've implemented dependency injection, which improves the testability of the code.

These elements are the backbone of the backend I've developed, ensuring a well-structured system that is both powerful and easy to evolve. With this approach, I am committed to software development excellence, prioritizing quality, scalability, and sustainability of the project.
